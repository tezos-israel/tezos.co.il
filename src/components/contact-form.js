import PropTypes from 'prop-types';
import React, { useState } from 'react';

import InputField from './shared/inputField';
import Button from './shared/button';

import MailchimpSubscribe from 'react-mailchimp-subscribe';
const url =
  'https://tezos.us7.list-manage.com/subscribe/post?u=006fde8ddcc4846cc107064ee&id=a34a3822b0';

export function ContactUsForm() {
  return (
    <div className="sm:w-1/2 w-full">
      <MailchimpSubscribe
        url={url}
        render={({ subscribe, status, message }) => (
          <Form onSubmit={subscribe} status={status} message={message} />
        )}
      />
    </div>
  );
}

function Form({ onSubmit, status, message }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const isValid = name && email && email.includes('@');
  const isLoading = status === 'sending';

  return (
    <form
      className="flex flex-wrap justify-between flex-col space-y-4"
      onSubmit={handleSubmit}
    >
      {status && <Status status={status} message={message} />}

      <InputField
        label="Name"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <InputField
        label="Email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <Button
        disabled={isLoading || !isValid}
        title="Send"
        className="bg-tezos-blue text-white w-full sm:py-3 py-1 disabled:bg-gray-500 disabled:opacity-40"
      />
    </form>
  );

  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !email || !email.includes('@')) {
      return;
    }

    onSubmit({
      EMAIL: email,
      NAME: name,
    });
  }
}

Form.propTypes = {
  message: PropTypes.string,
  onSubmit: PropTypes.func,
  status: PropTypes.string,
};

function Status({ status, message }) {
  if (status === 'sending') {
    return <div className="">sending...</div>;
  }

  if (status === 'error') {
    return <div className="" dangerouslySetInnerHTML={{ __html: message }} />;
  }

  if (status === 'success') {
    return <div className="" dangerouslySetInnerHTML={{ __html: message }} />;
  }

  return null;
}

Status.propTypes = {
  message: PropTypes.string,
  status: PropTypes.oneOf(['sending', 'error', 'success']),
};
