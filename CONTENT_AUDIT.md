# RafikeyAIWeb Content Audit

## Overview
This document identifies all placeholder content across the RafikeyAIWeb application and categorizes it by page, section, and content type. This audit serves as a guide for content creators to replace placeholder text, images, and data with meaningful, brand-appropriate content.

## Content Categories

### 🚩 High Priority (User-Facing Critical Content)
### ⚠️ Medium Priority (Important but Less Critical)
### 💡 Low Priority (Enhancement Content)

---

## 1. HOME PAGE (`src/views/HomePage.vue`)

### 🚩 Hero Section (Lines 114-162)
**Current Content**: Working content with proper messaging
**Status**: ✅ Complete
- Tagline: "A safe space for SRHR info and services"
- Description: Proper RAFIKEY messaging
- Call-to-action buttons functional

### 🚩 About Section - Feature Cards (Lines 194-264)
**Current Content**: Lorem ipsum placeholders
**Placeholder Issues**:
- Line 205-207: "Lorem ipsum doloor sit amet, consecteur adiopiscing elit..."
- Line 224-226: Same Lorem ipsum text
- Line 241-244: Same Lorem ipsum text  
- Line 259-262: Same Lorem ipsum text

**Required Content**:
- **SRHR Info Card**: Real description of sexual and reproductive health information provided
- **Nearest Service Card**: Description of location services for clinics/healthcare
- **Talk to Someone Card**: Description of human support/counseling services
- **Personalized Support Card**: Description of AI-powered personalized assistance

**Content Type**: Short descriptions (50-80 words each)
**Tone**: Supportive, informative, youth-friendly

### 🚩 Testimonials Section (Lines 312-432)
**Current Content**: Lorem ipsum with repeated placeholder data
**Placeholder Issues**:
- Lines 22-61: `carouselInfo` array with Lorem ipsum testimonials
- Lines 326-385: Hardcoded testimonial cards (all "Jaden Kiptoo, Machakos")
- Lines 341, 360, 379: Lorem ipsum testimonial text

**Required Content**:
- 4-6 authentic user testimonials (anonymized for privacy)
- Diverse geographic locations across Kenya
- Real experiences with RAFIKEY services
- Names should be either anonymous ("User from Nairobi") or pseudonyms

**Content Type**: Testimonials (100-150 words each)
**Tone**: Personal, authentic, positive

### ⚠️ Blog Section (Lines 436-477)
**Current Content**: Single placeholder blog post
**Placeholder Issues**:
- Line 448: Hardcoded date "23 April 2025" (future date)
- Lines 457-459: Lorem ipsum blog description

**Required Content**:
- Recent, relevant blog post title
- Actual publication date
- Real blog post excerpt (100-120 words)
- Link to full blog post

**Content Type**: Blog post preview
**Tone**: Educational, engaging

### 💡 Why RAFIKey Section (Lines 270-310)
**Current Content**: Good messaging
**Status**: ✅ Complete - Content is appropriate and informative

---

## 2. ABOUT PAGE (`src/views/AboutPage.vue`)

### ✅ Main Content
**Status**: ✅ Complete
**Assessment**: All content appears to be real, well-written, and appropriate for the brand. No placeholder content identified.

---

## 3. CHATBOT PAGE (`src/views/ChatbotPage.vue`)

### ✅ Main Content
**Status**: ✅ Complete
**Assessment**: Content is informative and appropriate. No placeholder content identified.

---

## 4. CONTACT PAGE (`src/views/ContactPage.vue`)

### ⚠️ Email Addresses (Lines 20, 27, 40)
**Current Content**: "tech@rafikey.org" used for all contact types
**Issues**:
- Same email for Tech Support, Data & Privacy, and General Inquiries
- May not be the actual contact emails

**Required Content**:
- Verify if "tech@rafikey.org" is correct for technical support
- Provide separate emails for different departments:
  - Tech Support: tech@rafikey.org
  - Data & Privacy: privacy@rafikey.org or dpo@rafikey.org  
  - General Inquiries: info@rafikey.org or hello@rafikey.org

**Content Type**: Contact information
**Priority**: Verify and update if needed

---

## 5. FAQS PAGE (`src/views/FAQSPage.vue`)

### 🚩 Entire Page Content (Line 84)
**Current Content**: Under construction image
**Status**: 🚨 Not implemented

**Required Content**:
- Comprehensive FAQ section covering:
  - How RAFIKEY works
  - Privacy and data protection
  - Account creation and management
  - SRHR topics and information accuracy
  - Technical support questions
  - Emergency situations and crisis support

**Content Type**: FAQ content (10-15 questions with detailed answers)
**Tone**: Clear, supportive, informative

---

## 6. NAVIGATION (`src/components/NavBar.vue`)

### ✅ Navigation Structure
**Status**: ✅ Complete
**Assessment**: Navigation is properly implemented with appropriate page names and functionality.

---

## 7. FOOTER (`src/components/FooterComponent.vue`)

### ⚠️ Footer Links (Lines 42-82)
**Current Content**: Link structure without actual destinations
**Issues**:
- Links are displayed but not functional
- Missing legal documents (Terms of Use, Privacy Policy)

**Required Content**:
- Implement actual routing for footer links
- Create and link legal documents:
  - Terms of Use
  - Privacy Policy
- Add "Our Research" section content if applicable

**Content Type**: Legal documents and informational pages

---

## TECHNICAL CONSIDERATIONS

### Commented Code (Potential Issues)
1. **HomePage.vue** (Lines 70-107): Commented GSAP animations - determine if these should be implemented
2. **FAQSPage.vue** (Lines 17-74): Commented scroll trigger code - cleanup needed

### Image Assets
**Placeholder Images Identified**:
- `avator-web.png` - Used for all testimonial avatars
- Various stock images that may need replacement with branded content

---

## IMPLEMENTATION PRIORITY

### Phase 1 (Critical - Launch Blockers)
1. ✅ ~~Homepage hero section~~ (Complete)
2. 🚨 **FAQs page complete implementation**
3. 🚨 **Homepage testimonials with real content**
4. 🚨 **Homepage feature descriptions (replace Lorem ipsum)**

### Phase 2 (Important - Post-Launch)
1. **Blog section with real content**
2. **Contact email verification and separation**
3. **Footer link implementation**

### Phase 3 (Enhancement)
1. **Testimonial avatar images**
2. **Additional blog posts**
3. **Legal document creation**

---

## CONTENT CREATION GUIDELINES

### Tone and Voice
- **Supportive**: Non-judgmental, understanding
- **Youth-Friendly**: Accessible language, relatable
- **Professional**: Trustworthy, credible
- **Inclusive**: Welcoming to all users

### Key Messaging
- Privacy and confidentiality
- Youth empowerment
- SRHR education and support
- Non-judgmental assistance
- Professional, evidence-based information

### Content Length Guidelines
- **Feature descriptions**: 50-80 words
- **Testimonials**: 100-150 words
- **Blog excerpts**: 100-120 words
- **FAQ answers**: 100-200 words

---

## VERIFICATION CHECKLIST

- [ ] Replace all Lorem ipsum text with real content
- [ ] Verify all contact email addresses are correct and functional
- [ ] Implement FAQ page completely
- [ ] Update testimonials with authentic (anonymized) content
- [ ] Add real blog post content
- [ ] Implement footer link functionality
- [ ] Review and clean up commented code
- [ ] Test all content for tone and messaging consistency
