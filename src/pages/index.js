import Head from "next/head";

import Header from "@components/Header";
import Container from "@components/Container";
import ProductCard from "@components/ProductCard";
import Button from "@components/Button";

import styles from "@styles/Home.module.scss";

// Test Data
import products from "@data/products.json";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Glamstock Store</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        <Container>
          <h1>Glamstock</h1>
          <h2>Featured Products</h2>
          <ul className={styles.products}>
            {products.map((product) => {
              return (
                <ProductCard key={product.id}>
                  <img src={product.image} alt="addidas black backpack" />
                  <h3 className={styles.productTitle}>{product.title}</h3>
                  <p
                    className={styles.productPrice}
                  >{`$${product.price} NZD`}</p>
                  <Button>Add to Cart</Button>
                </ProductCard>
              );
            })}
          </ul>
        </Container>
      </main>

      <footer className={styles.footer}>
        &copy; GlamStock, {new Date().getFullYear()}
      </footer>
    </div>
  );
}