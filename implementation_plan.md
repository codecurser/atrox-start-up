# Ataryo Website Redesign Plan

## Goal Description
Redesign the entire Ataryo website to be fully responsive, modern, and aesthetically premium. The new design will focus on user experience, visual hierarchy, and dynamic interactions using Tailwind CSS and Framer Motion.

## User Review Required
> [!IMPORTANT]
> This redesign will overwrite existing styles and component structures. Ensure you have a backup if needed.

## Proposed Changes

### Global Configuration
#### [MODIFY] [tailwind.config.js](file:///d:/Downloads/ataryo-main/ataryo-main/tailwind.config.js)
- Add custom color palette (Primary, Secondary, Accent).
- Add custom font family (Outfit or Inter).
- Add custom animations/keyframes.

#### [MODIFY] [index.css](file:///d:/Downloads/ataryo-main/ataryo-main/src/index.css)
- Import Google Fonts.
- Add base styles for smooth scrolling and typography.

### Components
I will update existing components to use the new design system.

#### [MODIFY] [HomeNavbar.tsx](file:///d:/Downloads/ataryo-main/ataryo-main/src/components/home/HomeNavbar.tsx)
- Implement glassmorphism effect.
- Add responsive mobile menu (hamburger).
- Improve navigation links styling.

#### [MODIFY] [HomeHero.tsx](file:///d:/Downloads/ataryo-main/ataryo-main/src/components/home/HomeHero.tsx)
- Use full-screen height or large hero section.
- Add animated text/background.
- Clear Call-to-Action (CTA) buttons.

#### [MODIFY] [HomeAbout.tsx](file:///d:/Downloads/ataryo-main/ataryo-main/src/components/home/HomeAbout.tsx)
- Modern layout with image/text split.
- improved typography.

#### [MODIFY] [HomeCoreValues.tsx](file:///d:/Downloads/ataryo-main/ataryo-main/src/components/home/HomeCoreValues.tsx)
- Use card layout with hover effects.
- Add icons (Lucide React).

#### [MODIFY] [HomeTeam.tsx](file:///d:/Downloads/ataryo-main/ataryo-main/src/components/home/HomeTeam.tsx)
- Grid layout for team members.
- Hover effects for social links/details.

#### [MODIFY] [HomeFooter.tsx](file:///d:/Downloads/ataryo-main/ataryo-main/src/components/home/HomeFooter.tsx)
- Clean, multi-column layout.
- Social media links and newsletter signup (if applicable).

### Pages
#### [MODIFY] [HomePage.tsx](file:///d:/Downloads/ataryo-main/ataryo-main/src/pages/HomePage.tsx)
- Update layout structure to support new components.
- Ensure consistent spacing and padding.

#### [MODIFY] [TextilePage.tsx](file:///d:/Downloads/ataryo-main/ataryo-main/src/pages/TextilePage.tsx)
- Apply similar design principles as Home.

#### [MODIFY] [SpasticityPage.tsx](file:///d:/Downloads/ataryo-main/ataryo-main/src/pages/SpasticityPage.tsx)
- Apply similar design principles as Home.

## Verification Plan
### Automated Tests
- Build the project using `npm run build` to ensure no type errors.
- Lint the project using `npm run lint`.

### Manual Verification
- Since I cannot see the browser, I will rely on code structure and best practices.
- I will verify that all components are imported and used correctly.
