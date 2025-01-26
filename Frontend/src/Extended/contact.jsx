import React from "react";

const ContactUs = () => {
  return (
    <div className="bg-base-200">
      <div className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold text-center mb-6">Contact Us</h1>
        <p className="text-center text-lg mb-10">
          Got a question, suggestion, or story to share? We'd love to hear from 
          you! Here's how you can get in touch with us.
        </p>

        <div className="rounded-xl p-6 space-y-6">
          <div>
            <h2 className="text-xl font-bold">Email Us</h2>
            <p>
              Reach out via email at:{" "}
              <a
                href="mailto:davemaulik8828@gmail.com"
                className="text-blue-600 underline"
              >
                davemaulik8828@gmail.com
              </a>
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold">Call Us</h2>
            <p>
              For inquiries, feel free to call us at:{" "}
              <span className="text-blue-600 font-bold">+91-7069456574</span>
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold">Address</h2>
            <p>
              A-504, Swati Chryshantha, Bopal, Ahmedabad
            </p>
          </div>
        </div>

        <div className="text-center mt-10 space-y-4">
          <h2 className="text-2xl font-bold">Connect with Us</h2>
          <p className="text-lg">
            Stay updated and reach out to us on our social media platforms:
          </p>
          <div className="flex justify-center space-x-6 text-xl">
            <a
              href="https://www.instagram.com/maulik.dave.md/"
              className="text-blue-600 hover:text-blue-800"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
            <a
              href="https://www.youtube.com/@davethetraveller"
              className="text-red-600 hover:text-red-800"
              target="_blank"
              rel="noopener noreferrer"
            >
              YouTube
            </a>
          </div>
        </div>

        <div className="mt-10 text-center">
          <p className="text-lg">
            We're here to help you discover new destinations, learn from
            experiences, and get inspired. Don't hesitate to reach out!
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
