import React from 'react';
import './LandingPage.module.css';

type ProfileProps = {
    name: string;
    role: string;
    imageUrl: string;
};

const Profile = ({ name, role, imageUrl }: ProfileProps) => (
    <div className="profile">
        <img src={imageUrl} alt={name} />
        <p>{`${name}<br>${role}`}</p>
    </div>
);

const LandingPage = () => {
    return (
        <div className="container">
            <h1>We've helped 2,600+ fellows of all sorts of backgrounds land great jobs</h1>
            <div className="salaries">
                <div className="salary">
                    <h2>$83,307</h2>
                    <p>average junior base salary</p>
                </div>
                <div className="salary">
                    <h2>$134,973</h2>
                    <p>average mid-level base salary</p>
                </div>
                <div className="salary">
                    <h2>$199,896</h2>
                    <p>average senior base salary</p>
                </div>
            </div>
            <button>Join the Network</button>
            <div className="profiles">
                {/* Assuming the same image for demonstration; you'd map through data normally */}
                <Profile name="Amanda B." role="Customer Success Manager" imageUrl="https://example.com/image.jpg" />
                <Profile name="Amy W." role="Product Manager" imageUrl="https://example.com/image.jpg" />
                <Profile name="Isaac N." role="Senior Financial Analyst" imageUrl="https://example.com/image.jpg" />
                {/* Add more profiles as needed */}
            </div>
        </div>
    );
};

export default LandingPage;
