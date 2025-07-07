import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  bookSidebar: [
    {
      type: 'doc',
      id: 'preface',
      label: 'Preface: A Magical Start',
    },
    {
      type: 'category',
      label: 'Part 1: Spells and Storage',
      items: [
        'chapter-1',
        'chapter-2',
        'chapter-3',
        'chapter-4',
        'chapter-5',
      ],
    },
    {
      type: 'category',
      label: 'Part 2: Wizarding Logic',
      items: [
        'chapter-6',
        'chapter-7',
        'chapter-8',
        'chapter-9',
        'chapter-10',
      ],
    },
    {
      type: 'category',
      label: 'Part 3: Create Your Own Wizarding World',
      items: [
        'chapter-11',
        'chapter-12',
        'chapter-13',
        'chapter-14',
        'chapter-15',
      ],
    },
    {
      type: 'doc',
      id: 'conclusion',
      label: 'Conclusion & Next Steps',
    },
  ],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
   */
};

export default sidebars;
