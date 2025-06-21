import React from 'react';
import Replies from './replies';

const data = [
  {
    username: 'gnanesh',
    comment: 'Hey team, does anyone have an update on the UI bug?',
    replies: [
      {
        username: 'sara',
        comment:
          'Yeah, I just fixed it on my branch. Will raise a PR in 10 mins.',
        replies: [
          {
            username: 'ram',
            comment: 'Thanks Sara! Let us know once merged.',
          },
          {
            username: 'alex',
            comment: 'Please tag me on the PR. I’ll test it right after.',
          },
          {
            username: 'kiran',
            comment: 'Let’s make sure to add a regression test this time.',
            replies: [
              {
                username: 'sara',
                comment: 'Good point. I’ll add that before pushing.',
              },
              {
                username: 'ram',
                comment: 'Thanks Sara. Appreciate it!',
                replies: [
                  {
                    username: 'alex',
                    comment: 'We should also document this in the changelog.',
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    username: 'ram',
    comment: 'Reminder: deploy freeze starts tomorrow evening.',
    replies: [
      {
        username: 'alex',
        comment: 'Right! Pushing all critical changes today.',
      },
      {
        username: 'kiran',
        comment: 'Can we get one more review for the payment module?',
        replies: [
          {
            username: 'gnanesh',
            comment: 'On it. Will finish reviewing in 15 minutes.',
          },
        ],
      },
    ],
  },
  {
    username: 'bilva',
    comment: 'Quick question — do we support multi-language in the new build?',
    replies: [
      {
        username: 'sara',
        comment: 'Not yet. It’s scheduled for next sprint.',
      },
    ],
  },
  {
    username: 'nayak',
    comment: 'Just deployed the hotfix to staging.',
    replies: [
      {
        username: 'alex',
        comment: 'Great. I’ll run smoke tests now.',
        replies: [
          {
            username: 'sara',
            comment: 'Thanks. Please check login and checkout flows too.',
          },
          {
            username: 'ram',
            comment: 'I’ll verify the analytics events afterward.',
            replies: [
              {
                username: 'kiran',
                comment: 'Let’s sync if anything fails.',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    username: 'deepa',
    comment: 'Can we revisit the dashboard layout? It feels a bit cluttered.',
    replies: [
      {
        username: 'kiran',
        comment: 'Agreed. Maybe reduce the number of cards shown by default.',
      },
      {
        username: 'alex',
        comment: 'Or use a tab-based layout to group metrics logically.',
        replies: [
          {
            username: 'deepa',
            comment: 'I like that idea. Let’s mock something up.',
          },
        ],
      },
    ],
  },
  {
    username: 'ananya',
    comment: 'Who can help me debug a CORS error I’m getting on staging?',
    replies: [
      {
        username: 'ram',
        comment: 'Is it coming from the new API gateway setup?',
      },
      {
        username: 'gnanesh',
        comment:
          'Try checking if the `Access-Control-Allow-Origin` header is missing.',
        replies: [
          {
            username: 'ananya',
            comment: 'That was it! Thanks — missed it in one endpoint.',
          },
        ],
      },
    ],
  },
  {
    username: 'sara',
    comment: 'The new dark mode toggle is live! 🎉',
    replies: [
      {
        username: 'alex',
        comment: 'Looks slick! I’m loving the color palette.',
      },
      {
        username: 'deepa',
        comment: 'Great job! Works well on both mobile and desktop.',
      },
      {
        username: 'kiran',
        comment: 'Can we get a setting to default to dark mode system-wide?',
        replies: [
          {
            username: 'sara',
            comment: 'Yes! I’ll add it in the next patch.',
          },
        ],
      },
    ],
  },
  {
    username: 'alex',
    comment: 'Anyone else seeing flaky tests in the CI pipeline?',
    replies: [
      {
        username: 'ram',
        comment:
          'Yes, the auth tests fail randomly. Might be a race condition.',
        replies: [
          {
            username: 'gnanesh',
            comment: 'Try increasing the wait before assertions — helped me.',
          },
          {
            username: 'ananya',
            comment: 'We should flag those as unstable and isolate them.',
          },
        ],
      },
    ],
  },
];

const Comments = () => {
  return (
    <div>
      <Replies data={data} />
    </div>
  );
};

export default Comments;
