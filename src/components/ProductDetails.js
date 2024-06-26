import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../CartContext';
import './ProductDetails.css';

const products = [
  {
    id: 1,
    name: "Lounge Pant - Slate Blue",
    price: 17.99,
    images: [
      "/1719089405901.jpeg",
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    description: "Comfortable lounge pants in a stylish slate blue color."
  },
  {
    id: 4,
    name: "Lounge Pant - Slate Blue",
    price: 17.99,
    images: [
      "/1719089405901.jpeg",
      "/1719089727174.jpeg",
      "/path/to/additional/image2.jpg",
      "/path/to/additional/image3.jpg"
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    description: "Comfortable lounge pants in a stylish slate blue color."
  },
  // Kids Categorie ids
  {
    id: 5,
    name: "Mini Mickey Mouse Vintage Crew Neck Sweatshirt",
    price: 29.99,
    images: [
      "/05-30-24_S6_51_MYSSUL8_SlateGrey_KT_AA_14-55-05_9902_CM_468x.jpeg",
      "/05-30-24_S6_51_MYSSUL8_SlateGrey_KT_AA_14-55-26_9913_CM.jpeg",
      "/05-30-24_S6_51_MYSSUL8_SlateGrey_KT_AA_14-56-14_9919_CM_468x.jpeg",
      "/05-30-24_S6_51_MYSSUL8_SlateGrey_KT_AA_14-56-39_9923_CM_468x.jpeg"
    ],
    sizes: ['4/5', '6/6X', '7/8', '10/12', '14/16'],
    description: "Mini Mickey Mouse Vintage Crew Neck Sweatshirt - Charcoal - Slate Grey"
  },

  {
    id: 6,
    name: "Mini Money Hungry Short Set - Red/Blackt",
    price: 21.99,
    images: [
      "/04-16-24_S6_12_FNT802634_RedBlack_RA_IM_10-33-16_130869_PXF_c99fb3c9-f3cc-417f-baee-31a919ddf5ce_468x.jpeg",
      "/04-16-24_S6_12_FNT802634_RedBlack_RA_IM_10-33-48_130876_PXF_3b9cdb2f-5012-453c-8b2e-c8146df49506_468x.jpeg",
      "/04-16-24_S6_12_FNT802634_RedBlack_RA_IM_10-34-03_130881_PXF_d683a53b-f771-43a9-a75e-32d90abd0e1b_468x.jpeg",
      "/04-16-24_S6_12_FNT802634_RedBlack_RA_IM_10-34-21_130884_PXF_347ced91-5e2e-4d78-9274-6aef67576926.jpeg"
    ],
    sizes: ['4', '6', '7/8', '10/12', '18'],
    description: "Available In Red/Black. Short SetShort Sleeve, Smiley Face Graphic"
  },

  {
    id: 7,
    name: "Mini Go America Short Set - Heather Grey",
    price: 24.99,
    images: [
      "/06-06-24_S6_29_TP16635KD_HeatherGrey_RA_PC_13-33-42_11437_PXF_468x.jpeg",
      "/06-06-24_S6_29_TP16635KD_HeatherGrey_RA_PC_13-33-36_11434_PXF_468x.jpeg",
    ],
    sizes: ['4', '6', '7/8', '10/12', '18'],
    description: "Available In Heather Grey. Matching Short Set, Cap Sleeve Tee ,Matching Short ,Fold Over Waistband ,95 % Cotton & 5 % Spandex, Model Wears Size 10/12,Mommy"
  },

  {
    id: 16,
    name: "Mini Playing Dress Up Strappy Sandal - Silver",
    price: 16.9,
    images: [
      "/02-09-23Studio6_HY_SR_14-58-02_25_OMO2230K_Silver_P_3461_ES_468x.jpeg",
      "/02-09-23Studio6_HY_SR_14-58-02_25_OMO2230K_Silver_P_3459_ES_468x.jpeg",
      "/02-09-23Studio6_HY_SR_14-58-02_25_OMO2230K_Silver_P_3460_ES_468x.jpeg",

    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', '1X', '2X', '3X'],
    description: "Available In Silver., Block Heel Sandal, Strappy Detail, Zipper Closure ,Imported"
  },

  {
    id: 16,
    name: "Mini Playing Dress Up Strappy Sandal - Silver",
    price: 16.9,
    images: [
      "/02-09-23Studio6_HY_SR_14-58-02_25_OMO2230K_Silver_P_3461_ES_468x.jpeg",
      "/02-09-23Studio6_HY_SR_14-58-02_25_OMO2230K_Silver_P_3459_ES_468x.jpeg",
      "/02-09-23Studio6_HY_SR_14-58-02_25_OMO2230K_Silver_P_3460_ES_468x.jpeg",

    ],
    sizes: ['1', '2', '3', '4', '5', '11', '12', '13'],
    description: "Available In Silver., Block Heel Sandal, Strappy Detail, Zipper Closure ,Imported"
  },

  // Men Categ:
  {
    id: 8,
    name: "Palermo Crinkled Nylon Cropped Puffer - Red",
    price: 9,
    images: [
      "/02-08-24_S7_90_ZDF01C410029_Red_CZ_DJ_15-16-25_22162_EH_468x.jpeg",
      "/02-08-24_S7_90_ZDF01C410029_Red_CZ_DJ_15-13-09_22139_EH_468x.jpeg",
      "/02-08-24_S7_90_ZDF01C410029_Red_CZ_DJ_15-12-28_22132_EH.jpeg",
      "/03-22-24_S7_64_ZDF01C410029_Red_P_KF_DJ_14-17-27_PLUS_57310_PXF.jpeg",
      "/03-22-24_S7_64_ZDF01C410029_Red_P_KF_DJ_14-17-04_PLUS_57305_PXF.jpeg",
      "/03-22-24_S7_64_ZDF01C410029_Red_P_KF_DJ_14-16-53_PLUS_57300_PXF.jpeg",
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL', 'XXXL'],
    description: "Front Hand Pockets ,Front Zipper Closure, Shell: 100% Nylon, Padding: 100% Polyester, Lining: 100% Polyester ,Imported"
  },

  {
    id: 9,
    name: "Hadwin Textured Shorts - Black/White",
    price: 35.99,
    images: [
      "/04-10-24_S7_57_ZDF01H420025_BlackWhite_CZ_DJ_11-54-11_42230_BH_468x.jpeg",
      "/04-10-24_S7_57_ZDF01H420025_BlackWhite_CZ_DJ_11-54-11_42231_BH_468x.jpeg",
      "/04-10-24_S7_57_ZDF01H420025_BlackWhite_CZ_DJ_11-54-11_42235_BH_468x.jpeg",

    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL', 'XXXL'],
    description: "Elastic Waist, Drawstring, Side Pockets ,Back Pocket, 55% Polyester 45% Cotton, Pair With Hadwin Textured Shirt"
  },

  {
    id: 10,
    name: "Check My Bank Statement Knit Short Sleeve Button Up - Black",
    price: 32.99,
    images: [
      "/04-27-23Studio7_CB_SS_14-02-06_82_ZDF01K310094_Black_6845_CM_468x.jpeg",
      "/05-12-23Studio7_CB_BD_13-51-10_75_ZDF01K310094_Black_7092_PLUS_MP.jpeg",
      "/04-27-23Studio7_CB_SS_14-02-12_82_ZDF01K310094_Black_6847_CM.jpeg",

    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL', 'XXXL'],
    description: "Fold Down Collar, Front Button Closure, Short Sleeve"
  },

  {
    id: 17,
    name: "Smiley Quilted Nylon Shacket - Cream",
    price: 27,
    images: [
      "/09-01-23Studio8_CB_AP_11-57-43_54_FNMN390_Cream_2217_PLUS_MR_468x.jpeg",
      "/08-30-23Studio7_CC_DJ_14-58-28_78_FNMN390_Cream_40003_CM.jpeg",

    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL', 'XXXL'],
    description: "Fold Down Collar, Front Button Closure, Side Hand Pockets, Quilted Smiley Pattern, Shell: 100% Polyester Lining: 100% Polyester Filling: 100% Polyester"
  },

  //women
  {
    id: 11,
    name: "Breezy Paradise Linen Cover Up Cargo Pants Set - Blac",
    price: 41.99,
    images: [
      "/05-10-24_S1_43_ZDRC30379_Black_KT_SS_14-00-00_73415_PXF_468x.jpeg",
      "/05-10-24_S1_43_ZDRC30379_Black_KT_SS_14-00-23_73423_PXF_468x.jpeg",
      "/05-10-24_S1_43_ZDRC30379_Black_KT_SS_14-00-38_73424_PXF_468x.jpeg",
      "/05-17-24_S5_7_ZDRC30379_Black_KT_AC_10-36-28_PLUS_9218_PXF_468x.jpeg",

    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL', 'XXXL'],
    description: "Swim Cover Up Set, Linen, Semi-Sheer, Button Up / Button Down Shirt, Collared, Flap Pockets ,Short Sleeves, 100% Viscose"
  },

  {
    id: 12,
    name: "Exceeding Expectations Heels - Gold",
    price: 34.99,
    images: [
      "/05-24-24_S8_23_KOLA18_Gold_ID_PC_11-06-49_84834_PXF_SL_468x.jpeg",
      "/06-11-24_S15_25_KOLA18_Gold_CZ_11-53-05_0582_SG_ES_468x.jpeg",
      "/05-24-24_S8_23_KOLA18_Gold_ID_PC_11-06-32_84833_PXF_468x.jpeg",

    ],
    sizes: ['6', '6.5', '8.5', '9', '10', '11'],
    description: "Heeled Sandals, Key Lock Charm Detail, Pointed Toe, Ultra High Heel, Imported"
  },

  {
    id: 13,
    name: "Living In It Textured Maxi Dress - Brown/combo",
    price: 51.99,
    images: [
      "/05-04-24_S3_35_33389SK_Browncombo_TK_SS_12-09-06_2139_PXF_468x.jpeg",
      "/05-04-24_S3_35_33389SK_Browncombo_TK_SS_12-09-27_2148_PXF_468x.jpeg",
      "/05-04-24_S3_35_33389SK_Browncombo_TK_SS_12-09-32_2150_PXF_468x.jpeg",
      "/05-16-24_S8_44_33389SK_BrownCombo_KT_AP_14-45-34_PLUS_82921_PXF.jpeg",

    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', '1X', '2X', '3X'],
    description: "Textured Maxi Dress, V-Neckline, Short Sleeves, Tie Waist, High Slit, Lined, Stretch, Self: 93% Nylon 7% Spandex, Lining: 100% Polyester"
  },

  {
    id: 14,
    name: "Her Moment To Shine Mini Bag - Silver",
    price: 9,
    images: [
      "/07-11-22Studio3_ME_RL_08-58-15_10_E8AN01SV_Silver_0763_SG_468x.jpeg",
      "/07-11-22Studio3_ME_RL_08-58-22_10_E8AN01SV_Silver_0765_SG.jpeg",

    ],
    sizes: [''],
    description: "Shoulder Bag, Rhinestone Detail"
  },

  {
    id: 15,
    name: "You And Me Only Sunglasses - Silver",
    price: 1.98,
    images: [
      "/03-25-24_S10_38_DR7355_Silver_CXB_13-12-55_10005_SG_ES_563efdd6-d304-4d3e-9a83-005525a3f508_468x.jpeg",
      "/03-25-24_S10_38_DR7355_Silver_CXB_13-12-55_10006_SG_ES_e64f14f8-921c-4b2c-b9ee-8a2784dda8c9_468x.jpeg",

    ],
    sizes: [''],
    description: "Available In Silver. Shield Sunglasses, Mirror Lens, Rimless Frame, Imported"
  },

];

function ProductDetails() {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));
  const [selectedSize, setSelectedSize] = useState('');
  const [mainImage, setMainImage] = useState(product ? product.images[0] : '');
  const { addToCart } = useCart();

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleAddToCart = () => {
    if (selectedSize) {
      addToCart(product, selectedSize);
      console.log(`Added ${product.name} in size ${selectedSize} to cart`);
    } else {
      alert('Please select a size');
    }
  };

  

  return (
    <div className="product-detail container mt-5">
      <div className="row">
        <div className="col-md-6">
          <img src={mainImage} alt={product.name} className="img-fluid main-image" />
          <div className="thumbnail-images mt-3">
            {product.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${product.name} view ${index + 1}`}
                onClick={() => setMainImage(image)}
                className={`thumbnail ${mainImage === image ? 'selected' : ''}`}
              />
            ))}
          </div>
        </div>
        <div className="col-md-6">
          <h1>{product.name}</h1>
          <p className="price">USD ${product.price.toFixed(2)}</p>
          <div className="size-options mt-3">
            <h5>Size</h5>
            {product.sizes.map(size => (
              <button
                key={size}
                className={`btn ${selectedSize === size ? 'btn-dark' : 'btn-outline-dark'} me-2`}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </button>
            ))}
          </div>
          <button className="btn btn-dark btn-lg mt-4 w-100" onClick={handleAddToCart}>
            Add to cart
          </button>
          <div className="product-details mt-4">
            <h5>Product Details</h5>
            <p>{product.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;