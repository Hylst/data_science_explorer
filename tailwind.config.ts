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
					foreground: 'hsl(var(--primary-foreground))'
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
					foreground: 'hsl(var(--accent-foreground))'
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
				},
				// Custom data science theme colors
				'ds-blue': {
					50: '#e6f1ff',
					100: '#cce4ff',
					200: '#99c9ff',
					300: '#66adff',
					400: '#3392ff',
					500: '#0077ff',
					600: '#005fcc',
					700: '#004799',
					800: '#003066',
					900: '#001833',
				},
				'ds-purple': {
					50: '#f2e6ff',
					100: '#e5ccff',
					200: '#cc99ff',
					300: '#b266ff',
					400: '#9933ff',
					500: '#8000ff',
					600: '#6600cc',
					700: '#4d0099',
					800: '#330066',
					900: '#1a0033',
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				// Enhanced floating animation
				float: {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-12px)' },
				},
				'float-delayed': {
					'0%, 100%': { transform: 'translateY(0px)' },
					'33%': { transform: 'translateY(-8px)' },
					'66%': { transform: 'translateY(-4px)' },
				},
				// Sophisticated fade animations
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(20px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' },
				},
				'fade-in-up': {
					'0%': { opacity: '0', transform: 'translateY(30px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' },
				},
				'fade-in-down': {
					'0%': { opacity: '0', transform: 'translateY(-30px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' },
				},
				'fade-in-left': {
					'0%': { opacity: '0', transform: 'translateX(-30px)' },
					'100%': { opacity: '1', transform: 'translateX(0)' },
				},
				'fade-in-right': {
					'0%': { opacity: '0', transform: 'translateX(30px)' },
					'100%': { opacity: '1', transform: 'translateX(0)' },
				},
				// Scale animations with bounce
				'scale-in': {
					'0%': { opacity: '0', transform: 'scale(0.8)' },
					'50%': { opacity: '0.5', transform: 'scale(1.05)' },
					'100%': { opacity: '1', transform: 'scale(1)' },
				},
				'scale-bounce': {
					'0%': { transform: 'scale(1)' },
					'50%': { transform: 'scale(1.05)' },
					'100%': { transform: 'scale(1)' },
				},
				// Gradient animations
				'gradient-x': {
					'0%, 100%': { 
						'background-size': '200% 200%',
						'background-position': 'left center'
					},
					'50%': {
						'background-size': '200% 200%',
						'background-position': 'right center'
					},
				},
				'gradient-y': {
					'0%, 100%': {
						'background-size': '200% 200%',
						'background-position': 'center top'
					},
					'50%': {
						'background-size': '200% 200%',
						'background-position': 'center bottom'
					},
				},
				// Shimmer effect
				shimmer: {
					'0%': { transform: 'translateX(-100%)' },
					'100%': { transform: 'translateX(100%)' }
				},
				// Pulse with glow
				'pulse-glow': {
					'0%, 100%': {
						opacity: '1',
						'box-shadow': '0 0 20px rgba(59, 130, 246, 0.5)'
					},
					'50%': {
						opacity: '0.8',
						'box-shadow': '0 0 30px rgba(59, 130, 246, 0.8)'
					},
				},
				// Stagger entrance
				'stagger-1': {
					'0%': { opacity: '0', transform: 'translateY(20px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' },
				},
				'stagger-2': {
					'0%': { opacity: '0', transform: 'translateY(20px)' },
					'20%': { opacity: '0', transform: 'translateY(20px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' },
				},
				'stagger-3': {
					'0%': { opacity: '0', transform: 'translateY(20px)' },
					'40%': { opacity: '0', transform: 'translateY(20px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' },
				},
				// Typewriter effect
				typewriter: {
					'to': { left: '100%' }
				},
				// Loading spinner
				'spin-slow': {
					'from': { transform: 'rotate(0deg)' },
					'to': { transform: 'rotate(360deg)' }
				},
				// Slow pulse animation
				'pulse-slow': {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.7' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				
				// Float animations
				'float': 'float 4s ease-in-out infinite',
				'float-delayed': 'float-delayed 5s ease-in-out infinite',
				
				// Fade animations
				'fade-in': 'fade-in 0.6s ease-out',
				'fade-in-up': 'fade-in-up 0.8s ease-out',
				'fade-in-down': 'fade-in-down 0.8s ease-out',
				'fade-in-left': 'fade-in-left 0.8s ease-out',
				'fade-in-right': 'fade-in-right 0.8s ease-out',
				
				// Scale animations
				'scale-in': 'scale-in 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
				'scale-bounce': 'scale-bounce 0.3s ease-in-out',
				
				// Gradient animations
				'gradient-x': 'gradient-x 3s ease infinite',
				'gradient-y': 'gradient-y 3s ease infinite',
				
				// Utility animations
				'shimmer': 'shimmer 2s infinite',
				'pulse-glow': 'pulse-glow 2s infinite',
				
				// Staggered animations
				'stagger-1': 'stagger-1 0.8s ease-out',
				'stagger-2': 'stagger-2 1.0s ease-out',
				'stagger-3': 'stagger-3 1.2s ease-out',
				
				// Special effects
				'typewriter': 'typewriter 3s steps(20) infinite',
				'spin-slow': 'spin-slow 3s linear infinite',
				'pulse-slow': 'pulse-slow 4s ease-in-out infinite'
			},
			fontFamily: {
				'code': ['Consolas', 'Monaco', 'Andale Mono', 'Ubuntu Mono', 'monospace'],
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;