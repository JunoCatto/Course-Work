"use strict";

const getCatFacts = async (req, res) => {
  try {
    const limit = req.query.limit || 1; // default limit is 1, but can be changed.
    const catFacts = await fetch(`https://catfact.ninja/facts?limit=${limit}`);
    const data = await catFacts.json();

    res.send({ result: 200, data: data });
  } catch (err) {
    console.log(err);
    res.send({ result: 500, error: err.message });
  }
};

// not really sure how to PUT here.

const getBreed = async (req, res) => {
  try {
    const breed = await fetch(
      `https://catfact.ninja/breeds/${req.params.breed}`
    );
    const data = await breed.json();

    res.send({ result: 200, data: data });
  } catch (err) {
    console.log(err);
    res.send({ result: 500, error: err.message });
  }
};

module.exports = {
  getCatFacts,
  getBreed,
};
