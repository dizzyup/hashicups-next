import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import NumberFormat from 'react-number-format'

import Field from '/components/Field'
import Radio from '/components/Radio'

import ChevronsIcon from '@hashicorp/flight-icons/svg/chevrons-right-24.svg'
import CheckIcon from '@hashicorp/flight-icons/svg/check-circle-24.svg'
import FailIcon from '@hashicorp/flight-icons/svg/x-square-24.svg'

export default function PaymentForm(props) {
  const [hasPaid, setHasPaid] = useState(false);
  const [isPaying, setIsPaying] = useState(true);
  const [hasAutofilled, setHasAutofilled] = useState(false);
  
  const [visaSelected, setVisaSelected] = useState(true);
  const [mastercardSelected, setMastercardSelected] = useState(false);
  const [amexSelected, setAmexSelected] = useState(false);
  
  const [cardholderName, setCardholderName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvcNumber, setCvcNumber] = useState('');
    
  const timer = useRef(null);
  
  const formComplete = cardholderName != "" && cardNumber != "" && expiryDate != "" && cvcNumber != "";
    
  const dismiss = async (event) => {
    props.setPaymentFormIsVisible(false);
    timer.current = setTimeout(() => {
      setHasPaid(false)
      setIsPaying(true)
    }, 500);
  };
  
  const submit = async (event) => {
    setHasPaid(true);
    setIsPaying(false);
    event.preventDefault();
  };
  
  const autofill = async (event) => {
    setCardholderName('A. Customer');
    setCardNumber('1234123412341234');
    setExpiryDate('122030');
    if (amexSelected) {
      setCvcNumber('1234');
    } else {
      setCvcNumber('123');
    }
    event.preventDefault();
  };
  
  const onCardChange = async (event) => {
    const selectedRadio = event.target.id
    if (selectedRadio == 'card-visa') {
      setVisaSelected(true)
      setMastercardSelected(false)
      setAmexSelected(false)
    } else if (selectedRadio == 'card-mastercard') {
      setVisaSelected(false)
      setMastercardSelected(true)
      setAmexSelected(false)
    } else if (selectedRadio == 'card-amex') {
      setVisaSelected(false)
      setMastercardSelected(false)
      setAmexSelected(true)
    }
  };
  
  useEffect(() => {
    return () => clearTimeout(timer.current);
  }, []);
  
  return (
    <div className={`${props.paymentFormIsVisible ? 'opacity-100 scale-100 bg-white xs:bg-transparent' : 'opacity-0 scale-95 pointer-events-none'} fixed xs:absolute inset-4 xs:inset-0 rounded-xl xs:rounded-none shadow-high xs:shadow-none flex flex-col xs:items-center xs:justify-center transition duration-500 ease-in-out z-20`}>
    
      <div className={`${isPaying ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'} absolute inset-0 flex flex-col xs:items-center xs:justify-center transition duration-500 ease-in-out pt-24 xs:pt-[120px] md:pt-0 overflow-scroll xs:overflow-hidden`}>
        <form className="flex flex-col w-full max-w-[460px] px-8 xs:px-0" onSubmit={submit}>
          <p className="text-left text-base text-black/75 pb-8">Use any card details or <button className="text-blue-500 underline hover:bg-blue-50 py-1 px-1 -mx-1 rounded-lg transition" onClick={autofill}>autofill</button>. No payment will be taken.</p>
          
          <fieldset className="mb-4">
            <ul className="grid grid-flow-col gap-5" onChange={onCardChange}>
              <Radio id="card-visa" label="Visa" value="visa" isChecked={visaSelected} />
              <Radio id="card-mastercard" label="Mastercard" value="mastercard" isChecked={mastercardSelected} />
              <Radio id="card-amex" label="Amex" value="amex" isChecked={amexSelected} />
            </ul>
          </fieldset>
          
          <fieldset className="flex">
            <Field value={cardholderName} setter={setCardholderName} id="cardholder" type="text" label="Cardholder Name*" placeholder="Enter name" />
          </fieldset>
          
          <fieldset className="flex">
            <Field value={cardNumber} setter={setCardNumber} id="number" type="cardnumber" label="Card Number*" placeholder="Enter card number" />
          </fieldset>
          
          <fieldset className="grid grid-cols-2 gap-6">
            <Field value={expiryDate} setter={setExpiryDate} id="expiry" type="cardexpiry" label="Expiry Date*" placeholder="MM/YYYY" />
            <Field value={cvcNumber} setter={setCvcNumber} id="cvc" type="cardcvc" label="CVC*" placeholder="***" />
          </fieldset>
                    
          <SubmitButton disabled={!formComplete} />
        </form>
      </div>
      
      <div className={`${hasPaid ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'} absolute inset-0 flex flex-col xs:items-center xs:justify-center transition duration-500 ease-in-out pt-24 xs:pt-[120px] md:pt-0 overflow-scroll xs:overflow-hidden`}>
        <PaymentStatus />
      </div>
      
      <button className="absolute top-6 right-6 flex items-center justify-center px-4 h-10 border border-gray-500/25 rounded-lg uppercase tracking-widest text-sm text-black/75 hover:text-black/100 hover:bg-gray-50 transition" onClick={dismiss}>
        {hasPaid ? (
          <span>Done</span>
        ) : (
          <span>Cancel</span>
        )}
      </button>
    </div>
  )
}

function SubmitButton(props) {
  
  return (
    <button className={`${props.disabled ? 'bg-gray-200 text-black/25' : 'bg-black/90 hover:bg-black text-white shadow-subtle'} relative flex items-center justify-between w-full h-[72px] px-8 mt-12 text-left text-white rounded-lg  group transition duration-500 ease-in-out overflow-hidden`} disabled={props.disabled}>
      <span className={`${props.disabled ? 'opacity-0' : 'opacity-100'} absolute left-0 top-0 bottom-0 w-1/2 bg-gradient-to-r from-white/0 via-white/20 to-white/0 shimmer transition ease-in-out`}></span>
      <span className="uppercase tracking-widest text-lg">Submit payment</span>
      <span className={`${props.disabled ? 'opacity-0' : 'opacity-75 group-hover:opacity-100'} flex items-center invert group-hover:translate-x-[8px] transition duration-500 ease-in-out`}>
        <Image src={ChevronsIcon} />
      </span>
    </button>
  )
}

function PaymentStatus(props) {
  
  return (
    <div className="flex flex-col text-left w-full max-w-[460px] p-8 pt-0 xs:p-0">
      <div className="flex flex-col text-left space-y-4 mb-12">
        <h1 className="font-serif text-5xl capitalize">Payment submitted</h1>
        <p className="text-black/75">(But not taken, because this is just a demo)</p>
      </div>
      
      <div className="flex flex-col items-start space-y-2 pb-5 mb-5 border-b border-gray-200">
        <p className="text-black/75">Status</p>
        <p className="flex space-x-3 font-serif text-lg">
          <Image src={CheckIcon} className="icon-green" />
          <span>Payment processed successfully</span>
        </p>
      </div>
      
      <div className="flex flex-col items-start space-y-2 pb-5 mb-5">
        <p className="text-black/75">Encryption Status</p>
        <p className="flex space-x-3 font-serif text-lg">
          <Image src={FailIcon} className="icon-red" />
          <span>Encryption is disabled</span>
        </p>
      </div>
      
      <div className="flex flex-col items-start space-y-1 px-6 py-4 bg-gray-100/50 shadow-stroke rounded-lg">
        <p className="text-black/75">Plain text card number</p>
        <NumberFormat className="font-mono" format="#### #### #### ####" value="1234123412341234" displayType="text" />
      </div>
      
      <p className="text-black/75 text-sm mt-6">Card details returned for demo purposes, not for production.</p>
    </div>
  )
}
