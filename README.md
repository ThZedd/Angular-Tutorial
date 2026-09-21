# Angular-Tutorial

# Angular Commands

##### 1. One Component means five files - all named right, all wired together:

> ng generate -> Creates new files automatic

> ng g c "Name of the Component"

- **g - generate**
- **c - component**


- **hello/ -> a new folder**
- **.ts -> class file**
- **.html -> template file**
- **.css -> styles file**
- **.spec.ts -> test file**

---

>ng serve -> Runs the app live while we develop

---

>ng build -> Packages the app to ship to the world

---

>ng test -> Runs our tests to check nothing broke

---

>ng g c NameOfTheComponent --inline-template -> Creates the component in just one file

---

# 2. Most Important Patterns Used on Angular

##### @Output

1. Declare it (Child)
```typescript
@Output() liked = new EventEmitter()
```

2. Emit it (Child)
```typescript
    this.liked.emit();  
```

3. Listen (Parent)

```typescript
    (liked)="onLiked()" 
```