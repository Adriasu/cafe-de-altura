import { NextResponse } from 'next/server';
import dbConnect from '../../../../lib/mongodb.mjs';
import Product from '../../../../models/Product';

// Función auxiliar para configurar los headers CORS
function setCorsHeaders(response) {
  response.headers.set('Access-Control-Allow-Credentials', 'true');
  response.headers.set('Access-Control-Allow-Origin', '*'); // Ajusta esto a tu dominio específico en producción
  response.headers.set('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  response.headers.set('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');
  return response;
}

export async function getProducts(page = 1, limit = 10) {
  const skip = (page - 1) * limit;
  console.log(`Fetching products: page ${page}, limit ${limit}`);
  try {
    const [products, total] = await Promise.all([
      Product.find().skip(skip).limit(limit).lean(),
      Product.countDocuments()
    ]);
    console.log(`Fetched ${products.length} products`);
    return { products, total, page, limit };
  } catch (err) {
    console.error('Error fetching products:', err);
    throw err;
  }
}

export async function GET(request) {
  console.log('GET request received');
  const start = Date.now();
  
  try {
    await dbConnect();
    console.log('Connected to database');

    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page') || '1', 10);
    const limit = parseInt(searchParams.get('limit') || '10', 10);

    const productsData = await getProducts(page, limit);
    
    const duration = Date.now() - start;
    console.log(`Request processed in ${duration}ms`);

    return setCorsHeaders(NextResponse.json(productsData));
  } catch (err) {
    console.error('Error in GET request:', err);
    return setCorsHeaders(NextResponse.json({ error: 'Internal Server Error' }, { status: 500 }));
  }
}

export async function POST(request) {
  try {
    await dbConnect();
    const body = await request.json();
    const newProduct = new Product(body);
    await newProduct.save();
    return setCorsHeaders(NextResponse.json(newProduct, { status: 201 }));
  } catch (err) {
    console.error('Error in POST request:', err);
    return setCorsHeaders(NextResponse.json({ error: 'Internal Server Error' }, { status: 500 }));
  }
}

// Manejar solicitudes OPTIONS para CORS
export async function OPTIONS(request) {
  return setCorsHeaders(new NextResponse(null, { status: 200 }));
}