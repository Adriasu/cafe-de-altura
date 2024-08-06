import { NextResponse } from 'next/server';
import dbConnect from '../../../../lib/mongodb.mjs';
//import { getProducts, createProduct } from '@/services/productService';
// import { errorHandler } from '@/utils/errorHandler';
import Product from '../../../../models/Product';

export async function getProducts() {
  try {
    const products = await Product.find();
    return products;
  } catch (err) {
    throw err;
  }
}

export async function GET(request) {
  await dbConnect();
  const { searchParams } = new URL(request.url);
  //console.log(searchParams);
  
  const page = searchParams.get('page') ?? '1';
  const limit = searchParams.get('limit') ?? '10';

  try {
    const productsData = await getProducts(parseInt(page), parseInt(limit));
    console.log("consolLog de route",NextResponse.json(productsData));
    
    return NextResponse.json(productsData);
  } catch (err) {
   console.log("error", err);
   
  }
}

export async function POST(request) {
  await dbConnect();
  try {
    const body = await request.json();
    const validatedData = Product.parse(body);
    const newProduct = await createProduct(validatedData);
    return NextResponse.json(newProduct, { status: 201 });
  } catch (err) {
    return errorHandler(err);
  }
}