import React from 'react'

export default class SocialMediaImages extends React.Component {
    render() {
        return (
            <div>
                <a href='www.facebook.com'><img className='SmButton' alt='Facebook' src='../fb.png' /></a>
                <a href='www.twitter.com'><img className='SmButton' alt='Twitter' src='../twit-icon.png' /></a>
                <a href='www.google.com'><img className='SmButton' alt='GPlus' src='../gp-icon.png' /></a>
                <a href='www.instagram.com'><img className='SmButton' alt='Insta' src='../insta-icon.png' /></a>
                <a href='www.flickr.com'><img className='SmButton' alt='Flickr' src='../flic-icon.png' /></a>
                <a href='www.pinterest.com'><img className='SmButton' alt='Pinterest' src='../pint1-icon.png' /></a>
                <a href='www.rss.com'><img className='SmButton' alt='rss' src='../rss-icon.png' /></a>
                <a href='www.gmail.com'><img className='SmButton' alt='gMail' src='../mail-icon.png' /></a>
            </div>
        )
    }
}