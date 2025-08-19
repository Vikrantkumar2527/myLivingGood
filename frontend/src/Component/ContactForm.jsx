import React from 'react';
function ContactForm() {
    const currentUrl = window.location.href;
    return ( 
        <div className='p-2 rounded text-center w-[100%]  sm:w-[30%]  bg-white'>

            <p className='text-center text-orange-700 font-bold text-xl'>GET IN TOUCH</p>
            <p className='text-center mb-4 '>Have questions or feedback? We're here to help. Send us a message, and we'll respond within 24 hours.</p>
            <form action="https://api.web3forms.com/submit" method="POST">
            <input type="hidden" name="access_key" value="fc6f7331-c9cc-4533-bc29-65835d73b541"></input>
            <input className='w-[80%] border border-gray-200 rounded bg-gray-100 p-3 mb-4' name='Name' required placeholder='Name' type="text" /><br />
            <input className='w-[80%] border border-gray-200 rounded bg-gray-100 p-3 mb-4' name="phone" required placeholder='Phn No' type="tel"  id="" /><br />
            <input className='w-[80%] border border-gray-200 rounded bg-gray-100 p-3 mb-4' name="email" required placeholder='Email' type="email"  id="" /><br />
            <textarea className='w-[80%] border border-gray-200 rounded bg-gray-100 p-3 mb-4'placeholder='Message' required  name="message"></textarea><br />
            <div className='flex  gap-2 justify-center mb-2'><div>Agree to term & conditions</div><input className='mt-1' type="checkbox" required /></div>
             <input type="hidden" name="redirect" value={currentUrl}></input>
            <div className='text-center'><button className='border py-1 px-4 bg-orange-600 rounded text-white '>Send</button></div>
            
            </form>
        </div>
     );
}

export default ContactForm;

