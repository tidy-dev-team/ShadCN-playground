# Default classes
By default, those are the border-radius classes coming from ShadCN, they're different from the default Tailwind classes.

```CSS
.rounded-xs     (2px)
.rounded-sm     (6px)
.rounded-md     (8px)
.rounded-lg     (10px)
.rounded-xl     (14px)
.rounded-2xl    (16px)
.rounded-3xl    (24px)
.rounded-4xl    (32px)
.rounded-full   (100000~)
```

# Changing the default theme

```CSS
:root {
  --radius: 0.625rem;
}
```