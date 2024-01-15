const express = require('express');
const Startup = require('../models/authModels');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

exports.startupForm = async (req, res) => {
  try {
    const { error, value } = Startup.validate(req.body);

    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }

    const {
      startupname,
      incorporationdate,
      startupaddress,
      city,
      state,
      emailaddress,
      phonenumber,
      foundername,
      industry,
      sector,
      businessidea,
    } = req.body;

    const startupInfo = {
      startupname,
      incorporationdate,
      startupaddress,
      city,
      state,
      emailaddress,
      phonenumber,
      foundername,
      industry,
      sector,
      businessidea,
    };

    const newStartup = new Startup(startupInfo);
    await newStartup.save();

    res.status(201).json({ message: 'Startup information submitted successfully' });
  } catch (error) {
    console.error('Error submitting startup information:', error);
    res.status(500).json({ error: 'Internal server error', message: error.message });
  }
};

exports.getStartupData = async (req, res) => {
  try {
    const startups = await Startup.find();
    res.status(200).json(startups);
  } catch (error) {
    console.error('Error fetching startup information:', error);
    res.status(500).json({ error: 'Internal server error', message: error.message });
  }
};

