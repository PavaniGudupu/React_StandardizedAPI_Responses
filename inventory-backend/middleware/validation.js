
// id should be > 0 and integer.

const id_Validation = async (req, res, next) => {
  const id = (req.body && req.body.id) || (req.params && req.params.id);

  if (id === undefined || id === "") {
    return res.status(400).json({ error: "▲ ID is missing." });
  }

  const idNum = Number(id);

  if (isNaN(idNum)) {
    return res.status(400).json({ error: "▲ ID must be a valid number." });
  }

  if (idNum <= 0) {
    return res.status(400).json({ error: "▲ ID must be greater than zero." });
  }

  next();
};



// mandatory feilds + price conditions

const field_Validation = async (req, res, next) => {
  const { name, category_id, mrp, sp, cp } = req.body;

  const mrpNum = parseFloat(mrp);
  const spNum = parseFloat(sp);
  const cpNum = parseFloat(cp);

  req.mrpNum = mrpNum;
  req.spNum = spNum;
  req.cpNum = cpNum;

  if (!name || !category_id || !mrp || !sp || !cp) {
    return res.status(400).json({ error: "▲ Missing required fields." });

  }

  if (isNaN(mrpNum) || isNaN(spNum) || isNaN(cpNum)) {
    return res.status(400).json({ error: "▲ MRP, SP, CP must be valid numbers." });
  }

  if (mrpNum <= spNum || mrpNum <= cpNum) {
    return res.status(400).json({ error: "▲ MRP must be greater than SP and CP." });
  }

  if (spNum < cpNum) {
    return res.status(400).json({ error: "▲ SP should not be less than CP." });
  }

  next();
};


export { id_Validation, field_Validation };



