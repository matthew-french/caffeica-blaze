import React from 'react'
import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import classNames from 'classnames'
import { CaretDownIcon } from '@radix-ui/react-icons'

import '@/styles/radix-main-menu.css'

const NavigationMenuDemo = () => {
  return (
    <NavigationMenu.Root className="NavigationMenuRoot">
      <NavigationMenu.List className="NavigationMenuList">
        <NavigationMenu.Item>
          <a href="/category/coffee-machines" className="flex">
            <NavigationMenu.Trigger className="NavigationMenuTrigger">
              Coffee Machines{' '}
              <CaretDownIcon className="CaretDown" aria-hidden />
            </NavigationMenu.Trigger>
          </a>
          <NavigationMenu.Content className="NavigationMenuContent">
            <ul className="List three">
              {coffeeMachines.map((item, i) => (
                <ListItem key={i} {...item} title={item.title}>
                  {item.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <a href="/category/coffee-and-consumables" className="flex">
            <NavigationMenu.Trigger className="NavigationMenuTrigger">
              Coffee & Consumables
              <CaretDownIcon className="CaretDown" aria-hidden />
            </NavigationMenu.Trigger>
          </a>
          <NavigationMenu.Content className="NavigationMenuContent">
            <ul className="List three">
              {consumables.map((item, i) => (
                <ListItem key={i} {...item} title={item.title}>
                  {item.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Trigger className="NavigationMenuTrigger">
            Vending Machines
            <CaretDownIcon className="CaretDown" aria-hidden />
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className="NavigationMenuContent">
            <ul className="List one">
              {vendingMachines.map((item, i) => (
                <ListItem key={i} {...item} title={item.title}>
                  {item.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Trigger className="NavigationMenuTrigger">
            Water Dispensers
            <CaretDownIcon className="CaretDown" aria-hidden />
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className="NavigationMenuContent">
            <ul className="List one">
              {waterDispensers.map((item, i) => (
                <ListItem key={i} {...item} title={item.title}>
                  {item.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Trigger className="NavigationMenuTrigger">
            Services
            <CaretDownIcon className="CaretDown" aria-hidden />
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className="NavigationMenuContent">
            <ul className="List one">
              {services.map((item, i) => (
                <ListItem key={i} {...item} title={item.title}>
                  {item.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>

        <NavigationMenu.Indicator className="NavigationMenuIndicator">
          <div className="Arrow" />
        </NavigationMenu.Indicator>
      </NavigationMenu.List>

      <div className="ViewportPosition">
        <NavigationMenu.Viewport className="NavigationMenuViewport" />
      </div>
    </NavigationMenu.Root>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, children, title, ...props }, forwardedRef) => (
  <li>
    <NavigationMenu.Link asChild>
      <a
        className={classNames('ListItemLink', className)}
        {...props}
        ref={forwardedRef}
      >
        <div className="ListItemHeading">{title}</div>
        <p className="ListItemText">{children}</p>
      </a>
    </NavigationMenu.Link>
  </li>
))

export default NavigationMenuDemo

const coffeeMachines: { title: string; href: string; description: string }[] = [
  {
    title: 'Bean to Cup',
    href: '/category/bean-to-cup',
    description:
      'The ultimate coffee machine for any coffee lover. These machines grind coffee beans on the spot to make the freshest coffee possible.',
  },
  {
    title: 'Traditional',
    href: '/docs/primitives/hover-card',
    description:
      'Stylish and elegant, these machines are perfect for any environment. They offer a range of drinks from espresso to cappuccino and are perfect for any coffee lover.',
  },
  {
    title: 'Instant',
    href: '/docs/primitives/progress',
    description:
      'Instant coffee machines are perfect for any environment. They offer a range of drinks from espresso to cappuccino and are easy to use and maintain.',
  },
  {
    title: 'Vending',
    href: '/docs/primitives/scroll-area',
    description:
      'These floor standing machines are modern, stylish, easy to operate and are ideal for busy locations that require a higher volume of beverages, with an assortment of drinks menus.',
  },
  {
    title: 'Grinders',
    href: '/docs/primitives/tabs',
    description:
      "Welcome to the world of coffee grinders. Whether you're a novice looking to get your first grinder or an experienced barista, youv'e come to the right place.",
  },
]

const consumables: { title: string; href: string; description: string }[] = [
  {
    title: 'Coffee Beans',
    href: '/docs/primitives/alert-dialog',
    description:
      'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    title: 'Instant & Filter Coffee',
    href: '/docs/primitives/hover-card',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    title: 'Capsules & Pods',
    href: '/docs/primitives/progress',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    title: 'Sachets',
    href: '/docs/primitives/scroll-area',
    description:
      'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    title: 'Tea',
    href: '/docs/primitives/tabs',
    description:
      'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    title: 'Whiteners & Chocolates',
    href: '/docs/primitives/tooltip',
    description:
      'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
]

const vendingMachines: { title: string; href: string; description: string }[] =
  [
    {
      title: 'Hot Drinks',
      href: '/docs/primitives/alert-dialog',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      title: 'Snacks',
      href: '/docs/primitives/hover-card',
      description:
        'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
  ]

const waterDispensers: { title: string; href: string; description: string }[] =
  [
    {
      title: 'Instant Hot Water',
      href: '/docs/primitives/alert-dialog',
      description:
        'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      title: 'Water Dispensers',
      href: '/docs/primitives/hover-card',
      description:
        'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
  ]

const services: { title: string; href: string; description: string }[] = [
  {
    title: 'Installation, servicing & repairs',
    href: '/docs/primitives/alert-dialog',
    description:
      'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    title: 'Leasing & hiring',
    href: '/docs/primitives/hover-card',
    description:
      'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
]
