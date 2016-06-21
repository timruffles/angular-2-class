## Change Detection
{ title: 1}

## Zones

```typescript
const originalSetTimeout = setTimeout;
window.setTimeout = (f, n) => {
  const current = zone.current();
  originalSetTimeout(() => {
    current.run(f);
  }, n)
} 
```
