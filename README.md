# abhishek_openpgp_demo

Steps to run project

1. Clone the repo
2. Run npm i
3. Create new public and private keys either manually or by using api in this demo (see point no 2 below in api section)
4. Add it in .env in your project under keys -> PGP_PRIVATE_KEY, PGP_PUBLIC_KEY, PGP_PASSPHRASE
5. run node index.js
6. Use below apis to encrypt/decrypt your messages

There are 4 apis present in demo.

1. Get public key

curl --location 'localhost:3000/public-key'

2. Generate new public and private keys.

curl --location 'localhost:3000/generate-keys'

3. Encrypt your message (You can pass your own publicm key in body . its optional)
 
curl --location 'localhost:3000/encrypt' \
--header 'Content-Type: application/json' \
--data '{
    "data": "hello abhishek"
}'

4. Decrypt your message (You can pass your own publicm key in body that you used while encrypting. its optional)

curl --location 'localhost:3000/decrypt' \
--header 'Content-Type: application/json' \
--data '{ "data": "-----BEGIN PGP MESSAGE-----\\n\\nwcFMAx4adV5uhjaVAQ/9EiWPpQwHd6Pz+BALz4BEVF9PHWARt34yEMm3lm3n\\n95PoaCtl9DPIhSxUnwlrTeQvQVlp/H/ft7KlxBmhEPXoINhHS6dm1zrklX6G\\n+1/1f5Q1mgRGTXCLlRmnEDi3QqXuZLVjOpmETMj5/StKy3Kk0XTMcgXXiOeG\\nnmW9wlMD2koyCf4Med2uoskGXq/DKgGLvS+b8kI0TKDjhUFF4pgV81yFzGtz\\nvGd8jD5iSiHLCJUF7PWtrdlTZT4x5JSIStRkQmOylLvQDFtVn1am+0SGH6bl\\nxPHcQPRcsqfBHoXULQHgg6+jzn9zMAZsbbvVtvXT1gtxf6tB7nd13e1ErfQY\\nJ2iInlRbWi6JjvX72fJCqkLL5HE/HueBCOVNP0Il6uxWrvRiWYpdazo16gnH\\nFYCQjzMPPMjrVQO4Lf1DKszINuQOg/fR1aB6v6eIBm544FeMIG7kK827VVqB\\nfvWJxMlVe41EX6Svrkp761h54Ltyv3FgJ9QJXAQ8NrcrS4EJpC7GhyNF0Ug1\\nSU9M9A6e/F9UVTrrUr3M4i+Aznl+Y5PN0SMKRM/H5StqCEDJt0izK3kT4JN9\\nZaTgg7yQvK5wC6CAvbuQGR2rFNho9Swz1vjfaGnNGdROgoPEfVcP5ZwU7tvg\\nnIhTtecwoE61yKosU0TFyffxLIhQie7cY+RwDdrRIY3SwcQB9926hVRgO+93\\nuDs1pkwdTh5WijwKDE6TveeHAKbOmxZVcjX1wfvZKYrDPMkp30TCXHDN7p8x\\nkNYW8Q+45255H1gqQMvqTwQb75FyHH6us2/DwXlRSAbEGxQY8OoNqvDrA8Q8\\nBp3y/st7MPtdBV+zMykWCoL8KsEjBEPwb0ccA+KyOtPuIl+vKduWgMHOfMNJ\\nG9zEsDZU46BC9047VhFT6fi/yylSjhpL7Vni44yUkn3hB5ll8RIeHd2cwVL3\\nwwgS2uCgf/0+TajLXEatFKKNn9kTJNcSSM/gZQXcrboSv6gNHG4wcHwgtLiq\\n9fidffgZR+vcdREweY+t/sfFeOp7PO0MKyUrdPsUx5zw8s5PYrdU8SsLIzkh\\nHwYYkEu0/FOoIHsA1FDWMDIz7IhX829ew0H37enGsQSZFtH8m1G8Bzu8JLu0\\ncDyVKjRQwTWasIO/cI65Krb/3+2sgGpVy0IRFgBvXcskDBFXWbD6lWCH/rJ0\\n+YYkr58SXe7iCBaVvMrXdHf4r3LMz/DqpiBXzzGyFNYG4Pl+i/c6SD0C7lgi\\nQncN7iACMfw05wSmWkTxMBWl4KApy9g9cW9FhpRAJZ+DYJiKSvxeWAGeSI93\\nsD7vAco2JOUone1vcNREfZGijSAya+uf01bXb8AmgwTpHPMtAaMRt+8uFuSx\\nh+6uqGLuyP9USdtNi5o1XwwKC6wCYIFRYEUnaq63ziSrgiwJzMnI2Z1HG86j\\n30OeQ3PtG/x8RIjk0oO4NRcpF8kVCBbkKS17ho/YbIPnV1v1YNq8XMo5TSil\\n90oduSvvrJpV8loGknU+tFvFALvGgj686MCMaMNPXXoCNavXhsMQpqWyGkW5\\nLI8L+w==\\n=vqzn\\n-----END PGP MESSAGE-----\\n" }'
