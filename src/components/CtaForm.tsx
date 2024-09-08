'use client';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { saveUserMessage } from '../actions/responses';

const schema = yup
  .object({
    name: yup.string().required(),
    email: yup.string().email().required(),
    phone: yup
      .string()
      .trim()
      .matches(new RegExp('^([0-9]{10})?$'), 'Phone must contain 10-digits'),
    website: yup.string(),
    about: yup.string().required(),
  })
  .required();

export default function CtaForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data: any) => {
    saveUserMessage(data).then(() => {
      alert('Your message has been recorded');
    });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="px-4 md:px-0 md:grid md:grid-cols-2 md:gap-x-10"
    >
      <div className="flex flex-col mt-4">
        <label className="pl-1 text-lg" htmlFor="cta-inp-name">
          Name*
        </label>
        <input
          className="outline-none p-2 border-2 border-white bg-background-secondary"
          id={'cta-inp-name'}
          {...register('name')}
        />
        <p className="text-red-700">{errors.name?.message}</p>
      </div>

      <div className="flex flex-col mt-4">
        <label className="pl-1 text-lg" htmlFor="cta-inp-email">
          Email*
        </label>
        <input
          className="outline-none p-2 border-2 border-white bg-background-secondary"
          id={'cta-inp-email'}
          {...register('email')}
        />
        <p className="text-red-700">{errors.email?.message}</p>
      </div>

      <div className="flex flex-col mt-4">
        <label className="pl-1 text-lg" htmlFor="cta-inp-phone">
          Phone
        </label>
        <input
          className="outline-none p-2 border-2 border-white bg-background-secondary"
          id={'cta-inp-phone'}
          {...register('phone')}
        />
        <p className="text-red-700">{errors.phone?.message}</p>
      </div>

      <div className="flex flex-col mt-4">
        <label className="pl-1 text-lg" htmlFor="cta-inp-website">
          Website
        </label>
        <input
          className="outline-none p-2 border-2 border-white bg-background-secondary"
          id={'cta-inp-website'}
          {...register('website')}
        />
        <p className="text-red-700">{errors.website?.message}</p>
      </div>

      <div className="flex flex-col mt-4 col-span-2">
        <label className="pl-1 text-lg" htmlFor="cta-inp-about">
          Tell me about your project*
        </label>
        <textarea
          className="outline-none p-2 border-2 border-white bg-background-secondary"
          id={'cta-inp-about'}
          {...register('about')}
          rows={4}
        />
        <p className="text-red-700">{errors.about?.message}</p>
      </div>

      <div className="col-span-2 flex justify-center mt-4">
        <button
          className="py-2 px-6 mb-[8px] border border-border-default hover:bg-[#8800b840] hover:border-2 hover:mb-[6px]"
          type="submit"
        >
          Submit
        </button>
      </div>
    </form>
  );
}
