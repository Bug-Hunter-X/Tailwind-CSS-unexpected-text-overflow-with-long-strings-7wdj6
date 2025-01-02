```javascript
// MyComponent.jsx

function MyComponent() {
  return (
    <div className="bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-4">Tailwind CSS Bug</h1>
      <p>This is some text with a long string that may cause a layout issue.</p>
      <p className="text-sm text-gray-600">This is more text.</p>
      {/* ... more content ... */}
    </div>
  );
}

// ...
```