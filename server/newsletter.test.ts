import { describe, it, expect, beforeAll, afterAll } from 'vitest';
import { subscribeToNewsletter, getNewsletterSubscribers } from './db';

describe('Newsletter Subscription', () => {
  const testEmail = 'test-subscriber@example.com';

  it('should subscribe a new email to the newsletter', async () => {
    const result = await subscribeToNewsletter(testEmail);
    expect(result).toBe(true);
  });

  it('should reject invalid email formats', async () => {
    const invalidEmails = [
      'not-an-email',
      'missing@domain',
      '@nodomain.com',
      'spaces in@email.com',
    ];

    for (const invalidEmail of invalidEmails) {
      const result = await subscribeToNewsletter(invalidEmail);
      expect(result).toBe(false);
    }
  });

  it('should accept valid email formats', async () => {
    const validEmails = [
      'user@example.com',
      'test.user@domain.co.uk',
      'name+tag@example.org',
    ];

    for (const validEmail of validEmails) {
      const result = await subscribeToNewsletter(validEmail);
      expect(result).toBe(true);
    }
  });

  it('should handle duplicate subscriptions gracefully', async () => {
    // First subscription
    const result1 = await subscribeToNewsletter(testEmail);
    expect(result1).toBe(true);

    // Second subscription (should also succeed - it's an upsert)
    const result2 = await subscribeToNewsletter(testEmail);
    expect(result2).toBe(true);
  });

  it('should retrieve active subscribers', async () => {
    // Subscribe a test email
    await subscribeToNewsletter(testEmail);

    // Get all subscribers
    const subscribers = await getNewsletterSubscribers();

    // Should be an array
    expect(Array.isArray(subscribers)).toBe(true);

    // Should contain our test email
    const hasTestEmail = subscribers.some(s => s.email === testEmail);
    expect(hasTestEmail).toBe(true);
  });

  it('should normalize email to lowercase', async () => {
    const mixedCaseEmail = 'TestUser@Example.COM';
    await subscribeToNewsletter(mixedCaseEmail);

    const subscribers = await getNewsletterSubscribers();
    const hasLowercaseEmail = subscribers.some(s => s.email === mixedCaseEmail.toLowerCase());
    expect(hasLowercaseEmail).toBe(true);
  });
});
