# Default classes
By default, those are the border-radius classes coming from ShadCN, they're different from the default Tailwind classes (For example `.rounded-sm` is 4px in TW vs 6px here).

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
In `app/globals.css` we find this variable, changing this will change all others.

```CSS
:root {
    --radius: 0.625rem;
    ...
}
```

So if we change it to `0.3125rem` we get these weird new parameters:

```CSS
.rounded-xs     (2px)
.rounded-sm     (1px)
.rounded-md     (3px)
.rounded-lg     (5px)
.rounded-xl     (9px)
.rounded-2xl    (16px)
.rounded-3xl    (24px)
.rounded-4xl    (32px)
.rounded-full   (100000~)
```

Notice that xs, 2xl, 3xl, 4xl and full will not change at all since be default they're not included in the theme, so they're coming from the default Tailwind variables.

# Changing the theme for real
In `app/globals.css` we find these variable, changing this will change any specific radius class.

```CSS
@theme inline {
    ...
    --radius-sm: calc(var(--radius) - 4px);
    --radius-md: calc(var(--radius) - 2px);
    --radius-lg: var(--radius);
    --radius-xl: calc(var(--radius) + 4px);
}
```

If we change it to something like this:

```CSS
:root {
    --radius: 0.125rem;
    ...
}
```

```CSS
@theme inline {
    ...
    --radius-xs: var(--radius);
    --radius-sm: calc(var(--radius) * 2);
    --radius-md: calc(var(--radius) * 3);
    --radius-lg: calc(var(--radius) * 4);
    --radius-xl: calc(var(--radius) * 5);
}
```

We'll get out these variables:

```CSS
.rounded-xs     (2px)
.rounded-sm     (4px)
.rounded-md     (6px)
.rounded-lg     (8px)
.rounded-xl     (10px)
```

And if we want to keep it in 4px grid, we can keep all our logic and just change this variable:

```CSS
:root {
    --radius: 0.25rem;
    ...
}
```

To get these variables out:

```CSS
.rounded-xs     (4px)
.rounded-sm     (8px)
.rounded-md     (12px)
.rounded-lg     (16px)
.rounded-xl     (20px)
```

And of course we can add all the missing classes we got from Tailwind to the theme itself like so:

```CSS
    --radius-xs: var(--radius);
    --radius-sm: calc(var(--radius) * 2);
    --radius-md: calc(var(--radius) * 3);
    --radius-lg: calc(var(--radius) * 4);
    --radius-xl: calc(var(--radius) * 5);
    --radius-2xl: calc(var(--radius) * 6);
    --radius-3xl: calc(var(--radius) * 7);
    --radius-4xl: calc(var(--radius) * 8);
    --radius-full: calc(var(--radius) * 1000);
```

This will be rendered as so:

```CSS
.rounded-xs     (4px)
.rounded-sm     (8px)
.rounded-md     (12px)
.rounded-lg     (16px)
.rounded-xl     (20px)
.rounded-2xl    (24px)
.rounded-3xl    (28px)
.rounded-4xl    (32px)
.rounded-full   (4000px)
```