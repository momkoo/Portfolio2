'use client'

import { motion } from 'framer-motion'
import { staggerContainer, fadeInUp, logoHover } from '@/lib/animations'

// Placeholder logos - will be replaced with DB data
const clientLogos = [
    { id: '1', name: 'Company 1' },
    { id: '2', name: 'Company 2' },
    { id: '3', name: 'Company 3' },
    { id: '4', name: 'Company 4' },
    { id: '5', name: 'Company 5' },
    { id: '6', name: 'Company 6' },
    { id: '7', name: 'Company 7' },
    { id: '8', name: 'Company 8' },
    { id: '9', name: 'Company 9' },
    { id: '10', name: 'Company 10' },
    { id: '11', name: 'Company 11' },
    { id: '12', name: 'Company 12' },
]

export default function LogoWall() {
    return (
        <section className="section bg-primary/[0.02]">
            <div className="container">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-2xl mx-auto mb-12"
                >
                    <h2 className="text-foreground mb-4">
                        Trusted by global brands
                    </h2>
                    <p className="text-muted text-lg">
                        We've partnered with industry leaders across various sectors
                    </p>
                </motion.div>

                {/* Logo Grid */}
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 md:gap-12"
                >
                    {clientLogos.map((logo) => (
                        <motion.div
                            key={logo.id}
                            variants={fadeInUp}
                            className="flex items-center justify-center"
                        >
                            <motion.div
                                initial="rest"
                                whileHover="hover"
                                animate="rest"
                                variants={logoHover}
                                className="w-full h-16 md:h-20 flex items-center justify-center px-4 cursor-pointer"
                            >
                                {/* Placeholder logo - replace with actual images */}
                                <div className="w-full h-full bg-gray-200 rounded-lg flex items-center justify-center text-gray-500 text-sm font-medium">
                                    {logo.name}
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
