# Portfolio Assets Organization Guide

## 📁 Folder Structure

### `/assets/images/`
- **profile.jpg** - Your professional profile picture (recommended: 400x400px, square format)
- **hero-bg.jpg** - Optional hero background image
- **projects/** - Project screenshots and images
  - `project1-thumbnail.jpg`
  - `project1-gallery/` (multiple images per project)
  - `project2-thumbnail.jpg`
  - etc.

### `/assets/videos/`
- **demo-reel.mp4** - Your robotics demo reel (recommended: max 50MB)
- **projects/** - Project demonstration videos
  - `robot-arm-demo.mp4`
  - `autonomous-navigation.mp4`
  - etc.

### `/assets/documents/`
- **cv.pdf** - Your latest CV/Resume
- **portfolio.pdf** - Detailed portfolio document (optional)
- **certifications/** - Any relevant certificates
- **research-papers/** - Published papers or research documents

### `/assets/icons/`
- **favicon.ico** - Website favicon
- **logo.svg** - Personal logo (if you have one)
- **tech-icons/** - Technology/skill icons (optional)

## 📋 Content to Prepare

### 1. LinkedIn Information
Create a file with your LinkedIn data:
- Professional headline
- Summary/About section
- Work experience (with dates, companies, descriptions)
- Education
- Skills and endorsements
- Certifications
- Projects

### 2. CV Information
Extract key information from your CV:
- Contact information
- Professional summary
- Technical skills
- Work experience
- Education
- Projects
- Publications (if any)
- Languages

### 3. Project Information
For each robotics project, prepare:
- Project title
- Brief description (2-3 sentences)
- Detailed description (1-2 paragraphs)
- Technologies used
- Your role
- Key achievements
- Links (GitHub, demo, paper, etc.)
- Media (images, videos)

## 🚀 Next Steps

1. **Upload your files** to the appropriate folders
2. **Create a content.json** file with all your text content
3. **Share your LinkedIn profile URL** so I can help extract information
4. **Upload your CV** so I can customize the website content

## 📝 Content Template

I'll help you create a `content.json` file once you provide your information. This will contain:

```json
{
  "personal": {
    "name": "Your Name",
    "title": "Robotics Engineer",
    "email": "your.email@example.com",
    "phone": "+1234567890",
    "location": "City, Country",
    "linkedin": "https://linkedin.com/in/yourprofile",
    "github": "https://github.com/yourusername"
  },
  "about": {
    "summary": "Your professional summary...",
    "stats": {
      "experience": "X+ Years",
      "projects": "X+ Projects",
      "technologies": "X+ Technologies"
    }
  },
  "skills": {
    "robotics": ["ROS", "Computer Vision", "Path Planning"],
    "programming": ["Python", "C++", "MATLAB"],
    "hardware": ["Arduino", "Raspberry Pi", "Sensors"]
  },
  "projects": [
    {
      "title": "Project Name",
      "description": "Brief description",
      "technologies": ["Tech1", "Tech2"],
      "image": "assets/images/projects/project1.jpg",
      "video": "assets/videos/projects/project1-demo.mp4",
      "github": "https://github.com/...",
      "demo": "https://..."
    }
  ],
  "experience": [
    {
      "title": "Job Title",
      "company": "Company Name",
      "period": "Start - End",
      "description": "What you did...",
      "skills": ["Skill1", "Skill2"]
    }
  ]
}
```

## 📤 How to Share Your Information

You can:
1. **Upload files directly** to the folders above
2. **Share your LinkedIn profile URL** in the chat
3. **Copy-paste your CV content** in the chat
4. **Describe your projects** in detail
5. **Share any existing portfolio materials**

Once you provide this information, I'll automatically update your website with personalized content! 