# Portfolio Customization Guide

This guide will help you personalize this AI portfolio with your own information, replacing all the placeholder content.

## 🚀 Quick Start

1. **Replace all instances of placeholder text** with your personal information
2. **Add your own images** to the `public/` folder
3. **Update contact information** and social media links
4. **Customize the AI responses** to match your background and expertise

## 📝 Files to Update

### 1. Personal Information Files

#### `src/components/presentation.tsx`
- Update `name`, `age`, `location`, and `description`
- Replace `src` with your profile image path
- Customize the tags array

#### `src/components/contact.tsx`
- Update `name`, `email`, and `handle`
- Replace all social media URLs with your actual profiles

#### `src/app/page.tsx`
- Change `[Your Name]` to your actual name
- Update GitHub repository URL

#### `src/app/layout.tsx`
- Update metadata title, description, and keywords
- Change author information and URLs

### 2. API Tools (AI Responses)

#### `src/app/api/chat/prompt.ts`
- Customize the system prompt with your background
- Update expertise areas and project descriptions
- Modify personal information and philosophy

#### `src/app/api/chat/tools/`
Update all tool files:
- `getPresentation.ts` - Your personal introduction
- `getContact.ts` - Your contact information
- `getInternship.ts` - Your career goals and focus
- `getCrazy.ts` - Your personal story
- `getSport.ts` - Your activities/hobbies
- `getProjects.ts` - Your project descriptions

### 3. Images and Assets

#### Required Images (place in `public/` folder):
- `avatar-placeholder.png` → Your profile picture (500x500px recommended)
- `resume-preview.png` → Resume preview image (800x600px recommended)
- `resume.pdf` → Your actual resume PDF
- `logo-placeholder.svg` → Your logo (or keep the placeholder)

#### Optional Images:
- Replace project images in `public/` with your own project screenshots
- Add personal photos for the sports/activities section

### 4. Configuration Files

#### `package.json`
- Update the `name` field if desired

#### `README.md`
- Update the portfolio URL
- Customize the description

#### `src/app/api/github-stars/route.ts`
- Update the GitHub repository URL

## 🎨 Customization Examples

### Example: Updating Personal Information

```typescript
// In src/components/presentation.tsx
const profile = {
  name: 'John Doe',
  age: 'Full Stack Developer',
  location: 'San Francisco, CA',
  description: "Hey 👋\nI'm John, a passionate full-stack developer with 5 years of experience building web applications. I specialize in React, Node.js, and cloud technologies.",
  src: '/john-profile.png',
};
```

### Example: Updating Contact Information

```typescript
// In src/components/contact.tsx
const contactInfo = {
  name: 'John Doe',
  email: 'john.doe@example.com',
  handle: '@johndoe',
  socials: [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/johndoe/',
    },
    // ... other social links
  ],
};
```

### Example: Customizing AI Responses

```typescript
// In src/app/api/chat/tools/getPresentation.ts
execute: async () => {
  return {
    presentation: "I'm John Doe, a full-stack developer with 5 years of experience. I love building scalable web applications and exploring new technologies.",
  };
},
```

## 🔧 Technical Customization

### Environment Variables
Create a `.env` file with:
```env
GOOGLE_GENERATIVE_AI_API_KEY=your_gemini_api_key_here
GEMINI_MODEL=gemini-1.5-flash-latest
GITHUB_TOKEN=your_github_token_here
```

### Styling
- Colors and themes can be customized in `src/app/globals.css`
- Component styling is in individual component files
- Tailwind CSS classes are used throughout

### AI Behavior
- Modify the system prompt in `src/app/api/chat/prompt.ts` to change how the AI responds
- Update individual tools to customize specific responses
- Test the AI responses by asking questions in the chat interface

## 📋 Checklist

- [ ] Update personal information in all components
- [ ] Replace placeholder images with your own
- [ ] Update contact information and social links
- [ ] Customize AI responses to match your background
- [ ] Update metadata and SEO information
- [ ] Test the chat functionality
- [ ] Deploy to your preferred platform (Vercel, Netlify, etc.)

## 🚀 Deployment

1. **Vercel (Recommended):**
   ```bash
   npm install -g vercel
   vercel
   ```

2. **Netlify:**
   - Connect your GitHub repository
   - Build command: `npm run build`
   - Publish directory: `.next`

3. **Other platforms:**
   - Build the project: `npm run build`
   - Deploy the `.next` folder

## 💡 Tips

- **Keep it authentic:** Use your real experiences and projects
- **Test thoroughly:** Make sure all links work and AI responses are accurate
- **Update regularly:** Keep your portfolio current with new projects and skills
- **Optimize images:** Compress images for faster loading
- **Mobile-friendly:** Test on different devices and screen sizes

## 🆘 Need Help?

If you encounter any issues:
1. Check the console for error messages
2. Verify all file paths are correct
3. Ensure environment variables are set
4. Test the AI functionality with simple questions

Happy customizing! 🎉 