-- Create Merchants
INSERT INTO merchants (MerchantName) values ("Payette Brewing Company");
INSERT INTO merchants (MerchantName) values ("Woodland Empire Brewery");
INSERT INTO merchants (MerchantName) values ("Boise Brewing");
INSERT INTO merchants (MerchantName) values ("Lost Grove Brewing");
INSERT INTO merchants (MerchantName) values ("Meriwether Cider House");

-- Populate Merchant Menus

-- Payette Brewing Company
INSERT INTO merchantmenu(merchant_id,item_name,item_description,item_cost,qty_avail) VALUES (5,"North Fork Lager","4.4% ABV - 19 IBU",6.00,200);
INSERT INTO merchantmenu(merchant_id,item_name,item_description,item_cost,qty_avail) VALUES (5,"Urban Surfer Citrus Wheat","3.7% ABV - 16 IBU",4.00,200);
INSERT INTO merchantmenu(merchant_id,item_name,item_description,item_cost,qty_avail) VALUES (5,"Rustler IPA","6.2% ABV - 65 IBU",7.00,200);
INSERT INTO merchantmenu(merchant_id,item_name,item_description,item_cost,qty_avail) VALUES (5,"Recoil IPA","6.5% ABV - 80 IBU",7.00,200);
INSERT INTO merchantmenu(merchant_id,item_name,item_description,item_cost,qty_avail) VALUES (5,"Sofa King Sunny Hazy Pale Ale","5% ABV - 25 IBU",5.50,200);

-- Woodland Empire Brewery
INSERT INTO merchantmenu(merchant_id,item_name,item_description,item_cost,qty_avail) VALUES (15,"City Of Trees IPA","5.4% ABV - 30 IBU",8.00,300);
INSERT INTO merchantmenu(merchant_id,item_name,item_description,item_cost,qty_avail) VALUES (15,"Edge of Rainbows Tropical IPA","4.9% ABV - 19 IBU",3.00,400);
INSERT INTO merchantmenu(merchant_id,item_name,item_description,item_cost,qty_avail) VALUES (15,"Big Sticky Red IPA","5.6% ABV - 39 IBU",4.00,500);
INSERT INTO merchantmenu(merchant_id,item_name,item_description,item_cost,qty_avail) VALUES (15,"Moondog Amber Ale","6.3% ABV - 25 IBU",6.50,600);
INSERT INTO merchantmenu(merchant_id,item_name,item_description,item_cost,qty_avail) VALUES (15,"Ada County Stout","9.3% ABV - 75 IBU",9.50,700);

-- Boise Brewing
INSERT INTO merchantmenu(merchant_id,item_name,item_description,item_cost,qty_avail) VALUES (25,"Better Hazy Than Never","6.3% ABV - 21 IBU",6.00,200);
INSERT INTO merchantmenu(merchant_id,item_name,item_description,item_cost,qty_avail) VALUES (25,"Snowboarder Porter","5.0% ABV - 20 IBU",6.25,200);
INSERT INTO merchantmenu(merchant_id,item_name,item_description,item_cost,qty_avail) VALUES (25,"Broad Street Blonde Ale","4.5% ABV - 16 IBU",6.10,200);
INSERT INTO merchantmenu(merchant_id,item_name,item_description,item_cost,qty_avail) VALUES (25,"Red Velvet Cream Ale","5.5% ABV - 22 IBU",7.00,200);
INSERT INTO merchantmenu(merchant_id,item_name,item_description,item_cost,qty_avail) VALUES (25,"Syringa Pale Ale","5.5% ABV - 40 IBU",1.23,200);

-- Lost Grove Brewing
INSERT INTO merchantmenu(merchant_id,item_name,item_description,item_cost,qty_avail) VALUES (35,"First Sight IPA","6.5% ABV - 25 IBU",6.50,200);
INSERT INTO merchantmenu(merchant_id,item_name,item_description,item_cost,qty_avail) VALUES (35,"Hef 1 W/B Hefeweizen","4.1% ABV - 15 IBU",5.75,200);
INSERT INTO merchantmenu(merchant_id,item_name,item_description,item_cost,qty_avail) VALUES (35,"Teddy BearPicnic Golden Ale","5.0% ABV - 10 IBU",6.50,200);
INSERT INTO merchantmenu(merchant_id,item_name,item_description,item_cost,qty_avail) VALUES (35,"Disappointed Karen Double IPA","8.3% ABV - 60 IBU",7.00,200);
INSERT INTO merchantmenu(merchant_id,item_name,item_description,item_cost,qty_avail) VALUES (35,"North Fork Lager","4.4% ABV - 35 IBU",6.50,200);

-- Meriwether Cider House
INSERT INTO merchantmenu(merchant_id,item_name,item_description,item_cost,qty_avail) VALUES (45,"Blackberry Boom","6.9% ABV - 45 IBU",6.00,200);
INSERT INTO merchantmenu(merchant_id,item_name,item_description,item_cost,qty_avail) VALUES (45,"Winter Madras","5% ABV - 40 IBU",6.00,200);
INSERT INTO merchantmenu(merchant_id,item_name,item_description,item_cost,qty_avail) VALUES (45,"Meri As the Day Is Long","6.9% ABV - 15 IBU",6.00,200);
INSERT INTO merchantmenu(merchant_id,item_name,item_description,item_cost,qty_avail) VALUES (45,"Cranberry Crosscut","6.9% ABV - 50 IBU",6.00,200);
INSERT INTO merchantmenu(merchant_id,item_name,item_description,item_cost,qty_avail) VALUES (45,"Quince Cider","4.6% ABV - 45 IBU",6.00,200);

