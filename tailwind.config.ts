
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
				// GB Hotel colors
				gbearth: {
					100: '#f1efe4',
					200: '#e0dbc4',
					300: '#cdc6a3',
					400: '#bbb283',
					500: '#a89d62',
					600: '#867e4f',
					700: '#655e3b',
					800: '#433f28',
					900: '#221f14'
				},
				gbsky: {
					100: '#d3e4fd',
					200: '#a7c9fb',
					300: '#7caefa',
					400: '#5093f8',
					500: '#2478f6',
					600: '#1d60c5',
					700: '#164894',
					800: '#0e3062',
					900: '#071831'
				},
				gbstone: {
					100: '#f1f0fb',
					200: '#e3e2f7',
					300: '#d5d3f4',
					400: '#c7c5f0',
					500: '#b9b6ec',
					600: '#9492bd',
					700: '#6f6d8e',
					800: '#4a495e',
					900: '#25242f'
				},
				gbmountain: {
					100: '#fde1d3',
					200: '#fbc3a7',
					300: '#f9a47c',
					400: '#f78650',
					500: '#f56824',
					600: '#c4531d',
					700: '#933e16',
					800: '#622a0e',
					900: '#311507'
				}
			},
			fontFamily: {
				sans: ['Roboto', 'sans-serif'],
				display: ['Open Sans', 'sans-serif']
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
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
