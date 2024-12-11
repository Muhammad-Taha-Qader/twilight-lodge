"use client";

import { useState, useEffect } from "react";
import { Listing } from "@/types/listing";

const HostListingsManager = () => {
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

  // Fetch host's listings
  useEffect(() => {
    fetch("/api/host/listings", {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    })
      .then((res) => res.json())
      .then((data) => setListings(data))
      .catch((err) => console.error("Error fetching listings:", err));
  }, []);

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: name === "price"
        ? Number(value)
        : name === "images"
          ? value.split(",").map((img) => img.trim())
          : value,
    }));
  };

  // Create a new listing
  const handleCreateListing = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.title || !form.location || !form.price || !form.description) {
      setError("Required fields are missing");
      return;
    }

    try {
      const res = await fetch("/api/host/listings/post", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        const createdListing = await res.json();
        setListings([...listings, createdListing.listing]);
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
    } catch (error) {
      console.error("Error creating listing:", error);
      setError("Failed to create listing.");
    }
  };

  // Delete a listing
  const handleDeleteListing = async (id: string) => {
    try {
      const res = await fetch(`/api/host/listings/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });

      if (res.ok) {
        setListings(listings.filter((listing) => listing.id !== id));
      } else {
        console.error("Failed to delete listing.");
      }
    } catch (error) {
      console.error("Error deleting listing:", error);
    }
  };

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold text-my-cocoa-100 mb-4">Host Listings Management</h2>
      <form onSubmit={handleCreateListing} className="space-y-4 mb-6">
        {Object.keys(form).map((key) => (
          <div key={key}>
            <input
              type="text"
              name={key}
              placeholder={`Enter ${key}`}
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
            <p>{listing.price}</p>
            <p className={`text-sm font-semibold ${listing.isSoldOut ? "text-red-600" : "text-green-600"}`}>
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

export default HostListingsManager;
