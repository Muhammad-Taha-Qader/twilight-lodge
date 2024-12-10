"use client";

import { useState, useEffect } from "react";
import { Listing } from "@/types/listing";

const ListingsManager = () => {
  const [listings, setListings] = useState<Listing[]>([]);
  const [form, setForm] = useState<Partial<Listing>>({
    title: "",
    location: "",
    distance: "",
    dateRange: "",
    price: 0,
    rating: undefined,
    isFavorite: false,
    isSoldOut: false,
    images: [],
    description: "",
  });
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("/api/admin/listings", {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    })
      .then((res) => res.json())
      .then((data) => setListings(data))
      .catch((err) => console.error(err));
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    // setForm({ ...form, [name]: name === "price" ? Number(value) : value });
    //to store image as array of strings
    setForm((prevForm) => ({
      ...prevForm,
      [name]: name === "price"
        ? Number(value)
        : name === "images"
          ? value.split(",").map((img) => img.trim()) // Split the comma-separated string into an array
          : value,
    }));
  };

  const handleCreateListing = async (e: React.FormEvent) => {
    e.preventDefault();
    if ( !form.title || !form.location || !form.price || !form.description) {
      setError("Required fields are missing");
      return;
    }

    const newListing = {
      ...form,
      images: form.images as string[],
    };

    const res = await fetch("/api/admin/listings/post", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(newListing),
    });

    if (res.ok) {
      const createdListing = await res.json();
      setListings([...listings, createdListing.listing]); // Ensure `createdListing.listing` matches Listing type
      setForm({
        title: "",
        location: "",
        distance: "",
        dateRange: "",
        price: 0,
        rating: undefined,
        isFavorite: false,
        isSoldOut: false,
        images: [],
        description: "",
      });
    } else {
      setError("Failed to create listing.");
    }
  };

  const handleDeleteListing = async (id: string) => {
    const res = await fetch(`/api/admin/listings/${id}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    });

    if (res.ok) {
      setListings(listings.filter((listing) => listing.id !== id));
    } else {
      console.error("Failed to delete listing.");
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-my-cocoa-100 mb-4">Listings Management</h2>
      <form onSubmit={handleCreateListing} className="space-y-4 mb-6">
        {Object.keys(form).map((key) => (
          <div key={key}>
            <input
              type="text"
              name={key}
              placeholder={`Enter ${key}`}
              //   value={(form as any)[key]}
              //   value={form[key] as string | number} // Type-safe casting
              value={(form[key as keyof Listing] ?? "") as string | number}
              onChange={handleInputChange}
              className="w-full p-2 border rounded text-my-cocoa-950"
            />
          </div>
        ))}
        <button type="submit" className="bg-my-cocoa-500 text-white p-2 rounded">
          Create Listing
        </button>
      </form>
      <ul>
        {listings.map((listing) => (
          <li key={listing.id} className="flex justify-between items-center mb-2">
            <p>{listing.title}</p>
            {/* <p>{listing.isSoldOut}</p> */}
            <p>{listing.price}</p>
            <p className={`text-sm font-semibold mt-2 ${listing.isSoldOut ? "text-red-600" : "text-green-600"}`}>
              {listing.isSoldOut ? "Sold out" : "Available"}
            </p>
            <button
              onClick={() => handleDeleteListing(listing.id)}
              className="text-red-500 hover:underline"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListingsManager;
