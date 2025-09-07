interface Product {
    readonly Productid: number;
    title: string;
    description?: string;
}

const product: Product = {
    Productid: 1,
    title: "Tablet",
    description: "compact and fast",
    
};
console.log("Product:", product);