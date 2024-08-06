import { NextResponse } from 'next/server';
import dbConnect from '../../../../lib/mongodb.mjs';
import Product from '../../../../models/Product';

// Conectar a la base de datos una sola vez al iniciar el servidor
dbConnect().catch(err => console.error('Failed to connect to MongoDB', err));

export async function getProducts(page = 1, limit = 10) {
  const skip = (page - 1) * limit;
  try {
    const products = await Product.find()
      .skip(skip)
      .limit(limit)
      .lean(); // .lean() para obtener objetos JavaScript planos, que son más rápidos
    const total = await Product.countDocuments();
    return { products, total, page, limit };
  } catch (err) {
    console.error('Error fetching products:', err);
    throw err;
  }
}

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const page = parseInt(searchParams.get('page') || '1', 10);
  const limit = parseInt(searchParams.get('limit') || '10', 10);

  try {
    const productsData = await getProducts(page, limit);
    return NextResponse.json(productsData);
  } catch (err) {
    console.error('Error in GET request:', err);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const body = await request.json();
    const newProduct = new Product(body);
    await newProduct.save();
    return NextResponse.json(newProduct, { status: 201 });
  } catch (err) {
    console.error('Error in POST request:', err);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}