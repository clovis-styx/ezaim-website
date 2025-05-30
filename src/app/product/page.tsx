// src/app/product/page.tsx
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Image from 'next/image'; // For optimized images

export default function ProductPage() {
  return (
    <div className="flex flex-col items-center">
      <Card className="w-full max-w-2xl">
        <CardHeader>
          <CardTitle className="text-3xl">EZAIM Device</CardTitle>
          <CardDescription>The ultimate gaming advantage.</CardDescription>
        </CardHeader>
        <CardContent>
          {/* Replace with your actual product image */}
          <div className="relative w-full h-64 mb-4 bg-gray-200 rounded-md">
            {/* <Image src="/path-to-your-product-image.jpg" alt="EZAIM Device" layout="fill" objectFit="cover" /> */}
            <p className="text-center p-4">Product Image Placeholder</p>
          </div>
          <p className="mb-4">
            Detailed description of the EZAIM device, its features, benefits,
            and why it's the best. (Remember the ethical and legal warnings).
          </p>
          <p className="text-2xl font-semibold mb-6">$99.99</p> {/* Your Price */}
        </CardContent>
        <CardFooter className="flex justify-center">
          {/* Sellpass button will go here */}
          <div id="sellpass-product-embed">
             <p>Loading payment options...</p>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}