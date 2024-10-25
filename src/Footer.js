import React from 'react';
import './Footer.css';
import FooterColumn from './FooterColumn';

const itemSupport = [
  'Coronavirus (COVID-19) FAQs',
  'Manage your trips',
  'Contact Customer Service',
  'Safety resource centre',
];
const itemDiscover = [
    'Genius loyalty programme',
    'Seasonal and holiday deals',
    'Travel articles',
    'Booking.com for Business',
    'Traveller Review Awards',
    'Car hire',
    'Flight finder',
    'Restaurant reservations',
    'Booking.com for Travel Agents',
];
const itemTerms = [
    'Privacy & cookies',
    'Terms and conditions',
    'Grievance officer',
    'Modern Slavery Statement',
    'Human Rights Statement'
];
const itemPartners = [
    'Extranet login',
    'Partner help',
    'List your property',
    'Become an affiliate'
];
const itemAbout = [
    'About Booking.com',
    'How we work',
    'Sustainability',
    'Press centre',
    'Careers',
    'Investor relations',
    'Corporate contact'
];

const Footer = () =>{
    return(
        <div className='footer-color'>
            <div className='footer-section container'>
                <FooterColumn className='font-style' title='Support' items={itemSupport} />
                <FooterColumn className='font-style' title='Discover' items={itemDiscover} />
                <FooterColumn className='font-style' title='Terms and settings' items={itemTerms} />
                <FooterColumn className='font-style' title='Partners' items={itemPartners} />
                <FooterColumn className='font-style' title='About' items={itemAbout} />
            </div>
        </div>
    )
}

export default Footer;