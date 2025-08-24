import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
					light: 'hsl(var(--primary-light))',
					glow: 'hsl(var(--primary-glow))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))',
					light: 'hsl(var(--accent-light))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			fontFamily: {
				'inter': ['Inter', 'sans-serif'],
				'poppins': ['Poppins', 'sans-serif'],
			},
			fontSize: {
				'xs': ['12px', { lineHeight: '16px' }],
				'sm': ['14px', { lineHeight: '20px' }],
				'base': ['16px', { lineHeight: '24px' }],
				'lg': ['18px', { lineHeight: '28px' }],
				'xl': ['20px', { lineHeight: '28px' }],
				'2xl': ['24px', { lineHeight: '32px' }],
				'3xl': ['30px', { lineHeight: '36px' }],
				'4xl': ['36px', { lineHeight: '40px' }],
				'5xl': ['48px', { lineHeight: '52px' }],
				'6xl': ['60px', { lineHeight: '64px' }],
				'7xl': ['72px', { lineHeight: '76px' }],
				'8xl': ['96px', { lineHeight: '100px' }],
				'9xl': ['128px', { lineHeight: '132px' }],
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				// Fade Animations
				'fade-in': {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' }
				},
				'fade-up': {
					'0%': { opacity: '0', transform: 'translateY(30px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'fade-down': {
					'0%': { opacity: '0', transform: 'translateY(-30px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'fade-left': {
					'0%': { opacity: '0', transform: 'translateX(-30px)' },
					'100%': { opacity: '1', transform: 'translateX(0)' }
				},
				'fade-right': {
					'0%': { opacity: '0', transform: 'translateX(30px)' },
					'100%': { opacity: '1', transform: 'translateX(0)' }
				},
				// Slide Animations
				'slide-up': {
					'0%': { transform: 'translateY(100%)' },
					'100%': { transform: 'translateY(0)' }
				},
				'slide-down': {
					'0%': { opacity: '0', transform: 'translateY(-50px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'slide-in-left': {
					'0%': { transform: 'translateX(-100%)' },
					'100%': { transform: 'translateX(0)' }
				},
				'slide-in-right': {
					'0%': { transform: 'translateX(100%)' },
					'100%': { transform: 'translateX(0)' }
				},
				// Scale Animations
				'scale-in': {
					'0%': { opacity: '0', transform: 'scale(0.9)' },
					'100%': { opacity: '1', transform: 'scale(1)' }
				},
				'scale-up': {
					'0%': { transform: 'scale(1)' },
					'100%': { transform: 'scale(1.05)' }
				},
				// Bounce & Float
				'bounce-in': {
					'0%': { opacity: '0', transform: 'scale(0.3)' },
					'50%': { transform: 'scale(1.05)' },
					'70%': { transform: 'scale(0.9)' },
					'100%': { opacity: '1', transform: 'scale(1)' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-20px)' }
				},
				// Rotation & Flip
				'rotate-in': {
					'0%': { opacity: '0', transform: 'rotate(-180deg)' },
					'100%': { opacity: '1', transform: 'rotate(0deg)' }
				},
				'flip-x': {
					'0%': { transform: 'rotateX(-90deg)' },
					'100%': { transform: 'rotateX(0)' }
				},
				'flip-y': {
					'0%': { transform: 'rotateY(-90deg)' },
					'100%': { transform: 'rotateY(0)' }
				},
				// Typewriter Effect
				'typewriter': {
					'0%': { width: '0' },
					'100%': { width: '100%' }
				},
				'blink': {
					'50%': { borderColor: 'transparent' }
				},
				// Pulse & Glow
				'pulse-glow': {
					'0%, 100%': { 
						opacity: '1',
						boxShadow: '0 0 5px rgba(59, 130, 246, 0.5)'
					},
					'50%': { 
						opacity: '0.8',
						boxShadow: '0 0 20px rgba(59, 130, 246, 0.8), 0 0 30px rgba(59, 130, 246, 0.6)'
					}
				},
				// Counter Animation
				'count-up': {
					'0%': { transform: 'translateY(100%)' },
					'100%': { transform: 'translateY(0)' }
				},
				// Shake Animation
				'shake': {
					'0%, 100%': { transform: 'translateX(0)' },
					'10%, 30%, 50%, 70%, 90%': { transform: 'translateX(-10px)' },
					'20%, 40%, 60%, 80%': { transform: 'translateX(10px)' }
				},
				// Wobble Animation
				'wobble': {
					'0%': { transform: 'translateX(0%)' },
					'15%': { transform: 'translateX(-25%) rotate(-5deg)' },
					'30%': { transform: 'translateX(20%) rotate(3deg)' },
					'45%': { transform: 'translateX(-15%) rotate(-3deg)' },
					'60%': { transform: 'translateX(10%) rotate(2deg)' },
					'75%': { transform: 'translateX(-5%) rotate(-1deg)' },
					'100%': { transform: 'translateX(0%)' }
				},
				// Zoom Animations
				'zoom-in': {
					'0%': { opacity: '0', transform: 'scale(0.5)' },
					'100%': { opacity: '1', transform: 'scale(1)' }
				},
				'zoom-out': {
					'0%': { transform: 'scale(1)' },
					'100%': { transform: 'scale(1.1)' }
				},
				// Heart Beat
				'heartbeat': {
					'0%': { transform: 'scale(1)' },
					'14%': { transform: 'scale(1.3)' },
					'28%': { transform: 'scale(1)' },
					'42%': { transform: 'scale(1.3)' },
					'70%': { transform: 'scale(1)' }
				},
				// Parallax
				'parallax-slow': {
					'0%': { transform: 'translateY(0px)' },
					'100%': { transform: 'translateY(-50px)' }
				},
				// Roll In
				'roll-in': {
					'0%': { 
						opacity: '0',
						transform: 'translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg)'
					},
					'100%': {
						opacity: '1',
						transform: 'translate3d(0, 0, 0)'
					}
				}
			},
			animation: {
				// Basic Animations
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				
				// Fade Animations
				'fade-in': 'fade-in 0.5s ease-out',
				'fade-up': 'fade-up 0.6s ease-out',
				'fade-down': 'fade-down 0.6s ease-out',
				'fade-left': 'fade-left 0.6s ease-out',
				'fade-right': 'fade-right 0.6s ease-out',
				
				// Slide Animations
				'slide-up': 'slide-up 0.4s ease-out',
				'slide-down': 'slide-down 0.8s ease-out',
				'slide-in-left': 'slide-in-left 0.5s ease-out',
				'slide-in-right': 'slide-in-right 0.5s ease-out',
				
				// Scale Animations
				'scale-in': 'scale-in 0.4s ease-out',
				'scale-up': 'scale-up 0.2s ease-out',
				
				// Bounce & Float
				'bounce-in': 'bounce-in 0.6s ease-out',
				'float': 'float 6s ease-in-out infinite',
				
				// Rotation & Flip
				'rotate-in': 'rotate-in 0.5s ease-out',
				'flip-x': 'flip-x 0.6s ease-out',
				'flip-y': 'flip-y 0.6s ease-out',
				
				// Typewriter Effect
				'typewriter': 'typewriter 2s steps(40) 1s 1 normal both',
				'blink': 'blink 1s infinite',
				
				// Pulse & Glow
				'pulse-glow': 'pulse-glow 2s infinite',
				
				// Counter Animation
				'count-up': 'count-up 0.3s ease-out',
				
				// Interactive Animations
				'shake': 'shake 0.5s ease-in-out',
				'wobble': 'wobble 1s ease-in-out',
				'heartbeat': 'heartbeat 1.5s ease-in-out infinite',
				
				// Zoom Animations
				'zoom-in': 'zoom-in 0.5s ease-out',
				'zoom-out': 'zoom-out 0.3s ease-out',
				
				// Delayed Animations (Stagger Effect)
				'fade-up-delay-1': 'fade-up 0.6s ease-out 0.1s both',
				'fade-up-delay-2': 'fade-up 0.6s ease-out 0.2s both',
				'fade-up-delay-3': 'fade-up 0.6s ease-out 0.3s both',
				'fade-up-delay-4': 'fade-up 0.6s ease-out 0.4s both',
				'fade-up-delay-5': 'fade-up 0.6s ease-out 0.5s both',
				
				// Parallax
				'parallax-slow': 'parallax-slow 10s linear infinite',
				
				// Roll In
				'roll-in': 'roll-in 0.6s ease-out'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
