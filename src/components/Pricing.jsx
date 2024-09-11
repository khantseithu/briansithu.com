// pages/index.js
import React from 'react';
import { CheckIcon } from '@heroicons/react/20/solid';

const tiers = [
    {
        name: 'Basic Package',
        id: 'tier-basic',
        href: 'https://cal.com/khantsithu/30min',
        priceMonthly: '$ 1500',
        description: "Ideal for startups and small businesses looking to build a robust web application.",
        features: [
            'Responsive Web Design',
            'Basic API Integration',
            'Unit Testing',
            'Deployment Setup',
            'Code Review and Optimization'
        ],
        featured: false,
    },
    {
        name: 'Advanced Package',
        id: 'tier-advanced',
        href: 'https://cal.com/khantsithu/30min',
        priceMonthly: '$ 3000',
        description: "Perfect for medium to large businesses requiring advanced features and optimizations.",
        features: [
            'Advanced API Development',
            'Microservices Architecture',
            'End-to-End Testing',
            'Performance Optimization',
            'Continuous Integration/Continuous Deployment (CI/CD)',
            'Scalability Solutions'
        ],
        featured: true,
    },
];

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Pricing() {
    return (
        <div className="py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-4xl sm:text-center">
                    <h2 className="text-base font-semibold leading-7 text-gray-700 dark:text-gray-300">Pricing</h2>
                    <p className="mt-2 text-4xl font-bold tracking-tight text-gray-800 dark:text-gray-200 sm:text-5xl">
                        Choose the plan that best fits your business needs and budget.
                    </p>
                </div>
                <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-700 dark:text-gray-400 sm:text-center">
                    Discover transparent pricing options designed to empower your business's online journey with simplicity and flexibility.
                </p>
                <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 items-center gap-y-6 sm:mt-20 sm:gap-y-0 lg:max-w-4xl lg:grid-cols-2">
                    {tiers.map((tier, tierIdx) => (
                        <div
                            key={tier.id}
                            className={classNames(
                                tier.featured
                                    ? 'relative bg-gray-900 shadow-2xl'
                                    : 'bg-gray-800 shadow-2xl sm:mx-8 lg:mx-0',
                                tier.featured
                                    ? ''
                                    : tierIdx === 0
                                        ? 'rounded-t-3xl sm:rounded-b-none lg:rounded-tr-none lg:rounded-bl-3xl'
                                        : 'sm:rounded-t-none lg:rounded-tr-3xl lg:rounded-bl-none',
                                'rounded-3xl p-8 ring-1 ring-gray-800/10 dark:ring-gray-200/10 sm:p-10',
                                'bg-[linear-gradient(to_right,#40404040_1px,transparent_1px),linear-gradient(to_bottom,#40404040_1px,transparent_1px)] bg-[size:14px_24px]'
                            )}
                        >
                            <h3
                                id={tier.id}
                                className={classNames(
                                    tier.featured ? 'text-gray-300' : 'text-gray-300',
                                    'text-base font-semibold leading-7'
                                )}
                            >
                                {tier.name}
                            </h3>
                            <p className="mt-4 flex items-baseline gap-x-2">
                                <span
                                    className={classNames(
                                        tier.featured ? 'text-gray-100' : 'text-gray-100',
                                        'text-5xl font-bold tracking-tight'
                                    )}
                                >
                                    {tier.priceMonthly}
                                </span>
                                <span className={classNames(
                                    tier.featured ? 'text-gray-400' : 'text-gray-400',
                                    'text-base'
                                )}>/project</span>
                            </p>
                            <p className={classNames(
                                tier.featured ? 'text-gray-400' : 'text-gray-400',
                                'mt-6 text-base leading-7'
                            )}>
                                {tier.description}
                            </p>
                            <ul
                                role="list"
                                className={classNames(
                                    tier.featured ? 'text-gray-400' : 'text-gray-400',
                                    'mt-8 space-y-3 text-sm leading-6 sm:mt-10'
                                )}
                            >
                                {tier.features.map((feature) => (
                                    <li key={feature} className="flex gap-x-3">
                                        <CheckIcon
                                            className={classNames(
                                                tier.featured ? 'text-gray-300' : 'text-gray-300',
                                                'h-6 w-5 flex-none'
                                            )}
                                            aria-hidden="true"
                                        />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                            <a
                                href={tier.href}
                                target='_blank'
                                rel="noopener noreferrer"
                                aria-describedby={tier.id}
                                className={classNames(
                                    'bg-gray-600 text-gray-100 shadow-sm hover:bg-gray-500 focus-visible:outline-gray-600',
                                    'mt-8 block rounded-md py-2.5 px-3.5 text-center text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 sm:mt-10'
                                )}
                            >
                                Book a call
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
