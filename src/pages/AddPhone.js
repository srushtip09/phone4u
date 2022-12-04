import React from "react";
import Input from "../Components/Addphone/Input";
import styles from "./PhoneForm.css";
import Button from "../Components/Addphone/Button";
import { VALIDATOR_REQUIRE } from "../Components/Addphone/validators";
import { useForm } from "../Components/hooks/forms";
import axios from "axios";
import { propTypes } from "react-bootstrap/esm/Image";

const NewPhone = (props) => {
  const [formState, inputHandler] = useForm(
    {
      name: {
        id: "name",
        value: "",
        isValid: false,
      },
      image: {
        id: "image",
        value: "",
        isValid: false,
      },
      price: {
        id: "price",
        value: "",
        isValid: false,
      },
      portfolio: {
        id: "portfolio",
        value: "",
        isValid: false,
      },
      brand: {
        id: "brand",
        value: "",
        isValid: false,
      },
    },
    false
  );
  //const postPhoneData =async()=>{
  // console.log("form");
  //   // const result = await fetch('http://localhost:5000/api/phones',{
  //   //   method:"POST",
  //   //   headers:{

  //   //             'Content-Type': 'application/json',
  //   //   },
  //   //   body:JSON.stringify({
  //   //     name: formState.inputs.name.value,
  //   //     image:formState.inputs.image.value,
  //   //     price:formState.inputs.price.value,
  //   //     portfolio:formState.inputs.portfolio.value,
  //   //     brand:formState.inputs.brand.id
  //   //   })

  //   // })
  //   try{
  //     const result = await axios.post("http://localhost:5000/api/phones",{
  //       name: formState.inputs.name.value,
  //       image:formState.inputs.image.value,
  //       price:formState.inputs.price.value,
  //       portfolio:formState.inputs.portfolio.value,
  //       brand:formState.inputs.brand.id

  //     })
  //     console.log(result.data)
  //   }
  //   catch(err){
  //     console.log(err)
  //   }
  //   //console.log("not done")
  //   // const updatedphone = await result.JSON().phone
  //   // console.log(updatedphone)

  // }
  
  const phoneSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      const result = await axios.post("http://localhost:5000/api/phones", {
        name: formState.inputs.name.value,
        image: formState.inputs.image.value,
        price: formState.inputs.price.value,
        portfolio: formState.inputs.portfolio.value,
        brand: formState.inputs.brand.value,
      }).then(()=>{
        props.closeHandler()
      });
      console.log(result.data);
    } catch (err) {
      console.log(err);
    }
   
    //console.log("not done")
    // const updatedphone = await result.JSON().phone
    // console.log(updatedphone)

    //console.log(formState.inputs,'form'); // send to the backend
  };

  return (
    <div className=" w-[70%] h-[60%] absolute top-[10%] left-[15%] z-50">
      <div className=" ">
        <div className="col-md-12">
          <div className="card1">
            <div className="cardh">
              <h2>
                <div className="text-white text-4xl font-[Nunito] py-3 px-5">
                  Add New Phone
                </div>
              </h2>
            </div>
            <div>
              <div className="">
                <form className="px-5" on onSubmit={phoneSubmitHandler}>
                  <Input
                    id="name"
                    element="input"
                    type="text"
                    label="Phone Name"
                    validators={[VALIDATOR_REQUIRE()]}
                    errorText="Please enter a valid input"
                    onInput={inputHandler}
                  ></Input>
                  <Input
                    id="image"
                    element="input"
                    type="text"
                    label="Image Url"
                    validators={[VALIDATOR_REQUIRE()]}
                    errorText="Please enter a valid input"
                    onInput={inputHandler}
                  ></Input>
                  <Input
                    id="price"
                    element="input"
                    type="number"
                    label="Price"
                    validators={[VALIDATOR_REQUIRE()]}
                    errorText="Please enter a valid input"
                    onInput={inputHandler}
                  ></Input>
                  <Input
                    id="portfolio"
                    element="input"
                    type="text"
                    label="PortFolio Name"
                    validators={[VALIDATOR_REQUIRE()]}
                    errorText="Please enter a valid input"
                    onInput={inputHandler}
                  ></Input>
                  <Input
                    id="brand"
                    element="input"
                    type="number"
                    label="Brand"
                    validators={[VALIDATOR_REQUIRE()]}
                    errorText="Please enter a valid input"
                    onInput={inputHandler}
                  ></Input>
                  <Button type="Submit" >
                    <span className="mr "> Add Phone</span>
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NewPhone;
