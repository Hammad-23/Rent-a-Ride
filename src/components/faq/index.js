import React, { useEffect, useState } from "react";
import Faq from "react-faq-component";

const data = {
    // title: "FREQUENTLY ASKED QUESTIONS",
  rows: [
    {
      title: "Who can rent a car?",
      content:
        "The car with driver can be rented by anyone above the age of 16. However, in case of self-drive, minimum age for hiring a car is 21 years and your license needs to be at least 1 year old. If you are a resident of Pakistan, you need to have a valid driving license along with NIC. If you are on a tourist visa then you need to have a valid home country license OR an international driving license and valid passport with visa stamp.",
    },
    {
      title: "Can I rent a car with and without driver both?",
      content:
        "Yes, you may book any car available on our website, with driver. However, the self-drive option is currently limited to Suzuki Wagon R and Daihatsu Mira.",
    },
    {
      title: "How can I pay the rent?",
      content: "We accept cash and bank transfers at the moment.",
    },
    {
      title: "Do I need to pay any security deposit?",
      content:
        "Yes, in case of the self-drive option, a security deposit is required.",
    },
    {
      title: "What happens if an accident occurs?",
      content:
        "In case of Self-Driver option, we cover the small damages from your security deposit. Since all our cars are insured, the bigger damages are covered by the insurance. However, the debt charged by the insurance company shall be paid by the customer. Furthermore, if the car stays at the workshop for repairs / damage caused by the accident, the rent for that period shall also be paid by the customer.",
    },
    {
      title: "What is your fuel policy?",
      content:
        "Customers are responsible for paying for their own fuel consumption. Each car is provided with a level of fuel and customers have to return the vehicle with the same level of fuel as they were given. We also provide an option to the customers, where they can pay for the number of kilometers done by the car at the specified rates for each car category, starting from the point the car leaves the office / Car Owner’s / Driver’s location.",
    },
  ],
};

const styles = {
  bgColor: "white",
  titleTextColor: "darkblue",
  rowTitleColor: "darkblue",
  rowContentColor: "lightGrey",
  fontFamily:"Bungee Inline",
  arrowColor: "darkblue",
};

const config = {
  //   animate: true,
  //   arrowIcon: "V",
  //   tabFocus: true
};

export default function FAq() {
  return (
    <div style={{width:"80%",marginLeft:"150px"}}>
      <Faq data={data} styles={styles} config={config} />
    </div>
  );
}
