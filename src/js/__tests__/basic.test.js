import getStatus from '../app.js';

test.each([
  [60, 'healthy'],
  [50.01, 'healthy'],
  [50, 'wounded'],
  [49.99, 'wounded'],
  [25, 'wounded'],
  [15.01, 'wounded'],
  [15, 'wounded'],
  [14.99, 'critical'],
  [5, 'critical'],
  [0, 'critical'],
])(('Check health status'),
  (health, expected) => {
    const result = getStatus({ name: 'Маг', health });
    expect(result).toBe(expected);
  });