import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="p-4 md:p-8 lg:p-12 bg-gray-100">
      <h2 className="text-2xl font-bold mb-4 text-black">Rules</h2>
      <ul className="list-disc list-inside space-y-4 text-black">
        <li>We may collect the following types of information:</li>
        <li>
          This includes your name, email address, phone number, and any other
          information you provide during registration for our bootcamp or
          courses.
        </li>
        <li>
          If you enroll in a paid course, we will collect payment information
          necessary to process your transaction. This information is handled
          securely and in accordance with applicable laws.
        </li>
        <li>We may collect information about how you access and use our services,
          including your IP address, browser type, and pages visited.
        </li>
        
          <p className="font-semibold">We use the information we collect for the following purposes:</p>
          <ol className="list-decimal list-inside ml-6 space-y-2">
            <li>To register you for our bootcamp and any subsequent courses.</li>
            <li>To communicate with you regarding your registration, course materials, and updates.</li>
            <li>To process payments for any paid courses.</li>
            <li>To improve our services and enhance your experience.</li>
          </ol>
        <li>
          We do not sell, trade, or otherwise transfer your personal information
          to outside parties, except as necessary to provide our services or
          comply with the law. We may share your information with trusted
          third-party service providers who assist us in operating our website
          and conducting our business, provided that those parties agree to
          keep this information confidential.
        </li>
        <li>
          We implement a variety of security measures to maintain the safety of
          your personal information. However, no method of transmission over
          the internet or method of electronic storage is 100% secure. While we
          strive to protect your personal information, we cannot guarantee its
          absolute security.
        </li>
        <li>
          You have the right to:
          <ul className="list-disc list-inside ml-6 space-y-2 mt-2">
            <li>Access the personal information we hold about you.</li>
            <li>Request correction of any inaccurate or incomplete information.</li>
            <li>
              Request deletion of your personal information, subject to certain
              exceptions.
            </li>
          </ul>
        </li>
        <li>
          We may update this Privacy Policy from time to time. We will notify
          you of any changes by posting the new Privacy Policy on our website.
          You are advised to review this Privacy Policy periodically for any
          changes.
        </li>
        <li>
          If you have any questions or concerns about this Privacy Policy or
          our data practices, please contact us at:{" "}
          <a
            href="mailto:codelatent@gmail.com"
            className="text-blue-500"
          >
            codelatent@gmail.com
          </a>
        </li>
        <li>
          By participating in our bootcamp and courses, you consent to the
          collection and use of your information as outlined in this Privacy
          Policy.
        </li>
      </ul>
    </div>
  );
};

export default PrivacyPolicy;
