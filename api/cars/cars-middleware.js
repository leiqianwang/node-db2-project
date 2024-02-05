const db = require('../../data/db-config');
const carId = require('./cars-model')



const checkCarId = async (req, res, next) => {
  // DO YOUR MAGIC
  try {
    const CarId = await carId.getById(req.params.id);
    if(CarId) {
      req.CarId = CarId;
      next()
    }else {
         next({ status: 404, message: "car with id <car id> is not found" });
    }

  }catch (err) {
    next(err);
  }
}

const checkCarPayload = (req, res, next) => {
  // DO YOUR MAGIC

  //vin	string	required, unique
// make	string	required
// model	string	required
// mileage	numeric	required
// title	string	optional
// transmission	string	optional
//    const {vin, make, model, mileage, title, transmission} = req.body;
//    if(vin && make && model && mileage && title && transmission) {
//     next();
//    }else {
//     next({ status: 400, message:  "<field name> is missing"});
//    }

// }

const { vin, make, model, mileage } = req.body;
  if (!vin) return next({ status: 400, message: "vin is missing" });
  if (!make) return next({ status: 400, message: "make is missing" });
  if (!model) return next({ status: 400, message: "model is missing" });
  if (mileage == null) return next({ status: 400, message: "mileage is missing" }); // Note: Using == null to catch both null and undefined
  next();
};

const checkVinNumberValid = (req, res, next) => {
  // DO YOUR MAGIC 
  const { vin } = req.body;
  // Basic VIN pattern: 17 characters, excluding I, O, and Q.
  const vinRegex = /^[A-HJ-NPR-Z0-9]{17}$/;

  if (!vin) {
    return next({ status: 400, message: "VIN is required" });
  }

  if (!vinRegex.test(vin)) {
    return next({ status: 400, message: "VIN is invalid" });
  }

  next();
};



const checkVinNumberUnique = async (req, res, next) => {
  // DO YOUR MAGIC
  const carVin = req.body.vin;
  try {
    const vinExist = await db('cars').where('vin', carVin).first();
    if (vinExist) {
      res.status(400).json({ message: "vin <vin number> already exists" });
    } else {
      next();
    }
  } catch (err) {
    next(err);
  }
};

module.exports ={
  checkCarId,
  checkCarPayload,
  checkVinNumberValid,
  checkVinNumberUnique,
}
