import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import { getProducts, createProduct } from '@/services/productService';
import { errorHandler } from '@/utils/errorHandler';
import { z } from 'zod';

const productSchema = z.object({
  brand: z.string(),
  price: z.number().positive(),
  img_url: z.string().url(),
  available: z.boolean()
});

export async function GET(request) {
  await dbConnect();
  const { searchParams } = new URL(request.url);
  const page = searchParams.get('page') ?? '1';
  const limit = searchParams.get('limit') ?? '10';

  try {
    const productsData = await getProducts(parseInt(page), parseInt(limit));
    return NextResponse.json(productsData);
  } catch (err) {
    return errorHandler(err);
  }
}

export async function POST(request) {
  await dbConnect();
  try {
    const body = await request.json();
    const validatedData = productSchema.parse(body);
    const newProduct = await createProduct(validatedData);
    return NextResponse.json(newProduct, { status: 201 });
  } catch (err) {
    return errorHandler(err);
  }
}