import Prismic from "@prismicio/client";

const apiEndpoint = "https://blog-properties-demo.cdn.prismic.io/api/v2";
const Client = Prismic.client(apiEndpoint);

export { Client };
