import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import api from "../../services/api";

export default function BreedCatalog() {
  const [breeds, setBreeds] = useState([]);
  const [filters, setFilters] = useState({
    species: "",
    minMilkYield: "",
    search: "",
  });

  useEffect(() => {
    loadBreeds();
  }, [filters]);

  const loadBreeds = async () => {
    try {
      const { data } = await api.get("/breeds", { params: filters });
      setBreeds(data);
    } catch (error) {
      console.error("Error loading breeds:", error);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Filters */}
      <div className="mb-8 p-4 bg-white rounded-lg shadow">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <select
            value={filters.species}
            onChange={(e) =>
              setFilters({ ...filters, species: e.target.value })
            }
            className="rounded-md border-gray-300">
            <option value="">All Species</option>
            <option value="cattle">Cattle</option>
            <option value="buffalo">Buffalo</option>
          </select>
          {/* Add more filters */}
        </div>
      </div>

      {/* Breed Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {breeds.map((breed) => (
          <div
            key={breed._id}
            className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src={breed.image}
              alt={breed.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{breed.name}</h3>
              <div className="text-sm text-gray-600">
                <p>
                  Milk: {breed.milkYield.min}-{breed.milkYield.max}{" "}
                  {breed.milkYield.unit}
                </p>
                <p>
                  Fat: {breed.fatContent.min}-{breed.fatContent.max}%
                </p>
                <p>Origin: {breed.origin}</p>
              </div>
              <Link
                to={`/breeds/${breed._id}`}
                className="mt-4 inline-block bg-primary text-white px-4 py-2 rounded-md hover:bg-secondary">
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
