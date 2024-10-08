import dbConnect from "../lib/mongodb.mjs/index.js";
import Product from "../models/Product.mjs/index.js";

const products = [
  {
    brand: "Costa Rica Tarrazú",
    price: 9.0,
    img_url:
      "https://res.cloudinary.com/dalssoks9/image/upload/v1666638763/cafe_de_altura/coffee_bag_costa_rica_tarrazu_jejzcp.png",
    available: true,
  },
  {
    brand: "Colombia Los Naranjos",
    price: 9.0,
    img_url:
      "https://res.cloudinary.com/dalssoks9/image/upload/v1666638763/cafe_de_altura/coffee_bag_colombia_los_naranjos_iajcb4.png",
    available: true,
  },
  {
    brand: "Laos Amanecer",
    price: 9.0,
    img_url:
      "https://res.cloudinary.com/dalssoks9/image/upload/v1666638764/cafe_de_altura/coffee_bag_laos_amanecer_wxhu0p.png",
    available: true,
  },
  {
    brand: "Etiopía Yrgacheff",
    price: 9.0,
    img_url:
      "https://res.cloudinary.com/dalssoks9/image/upload/v1666638763/cafe_de_altura/coffee_bag_etiopia_yrgacheff_lwopk9.png",
    available: true,
  },
  {
    brand: "Kenia Ndunduri",
    price: 15.0,
    img_url:
      "https://res.cloudinary.com/dalssoks9/image/upload/v1666638764/cafe_de_altura/coffee_bag_kenia_ndunduri_dt0msh.png",
    available: true,
  },
  {
    brand: "Etiopía Sidamo",
    price: 17.0,
    img_url:
      "https://res.cloudinary.com/dalssoks9/image/upload/v1666638763/cafe_de_altura/coffee_bag_etiopia_sidamo_obmho6.png",
    available: true,
  },
  {
    brand: "Costa Rica Monte Bello",
    price: 12.0,
    img_url:
      "https://res.cloudinary.com/dalssoks9/image/upload/v1666638763/cafe_de_altura/coffee_bag_costa_rica_monte_bello_v1oscf.png",
    available: true,
  },
  {
    brand: "Colombia La Casita",
    price: 9.0,
    img_url:
      "https://res.cloudinary.com/dalssoks9/image/upload/v1666638763/cafe_de_altura/coffee_bag_colombia_la_casita_pefsel.png",
    available: false,
  },
];

async function seedProducts() {
  try {
    await dbConnect();
    await Product.deleteMany({});
    await Product.insertMany(products);
    console.log("Productos insertados exitosamente");
  } catch (error) {
    console.error("Error al insertar productos:", error);
  } finally {
    process.exit();
  }
}

seedProducts();
