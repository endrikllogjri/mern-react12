const express = require("express");
const res = require("express/lib/response");
const faker = require("faker");
const app = express();
const port = 3000;

const _getFakeUser = () => ({
  _id: faker.datatype.uuid(),
  firstName: faker.name.firstName(),
  lastName: faker.name.lastName(),
  phoneNumber: faker.phone.phoneNumber(),
  email: faker.internet.email(),
  password: faker.internet.password(),
});

const _getFakeCompany = () => ({
  _id: faker.datatype.uuid(),
  companyName: faker.company.companyName(),
  address: {
    city: faker.address.city(),
    street: faker.address.streetAddress(),
    state: faker.address.state(),
    zipCode: faker.address.zipCode(),
    country: faker.address.country(),
  },
});

app.get("/api/users/new", (req, res) => {
  res.json(_getFakeUser());
});

app.get("/api/companies/new", (req, res) => {
  res.json(_getFakeCompany());
});

app.get("/api/company", (_, res) => {
  res.json({
    user: _getFakeUser(),
    company: _getFakeCompany(),
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
