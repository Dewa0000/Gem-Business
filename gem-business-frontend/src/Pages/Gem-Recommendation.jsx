import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useFetchProducts from "../Hooks/useFetchProducts";

function GemRecommendation() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    dateOfBirth: "",
    timeOfBirth: "",
    placeOfBirth: "",
    bodyWeight: "",
    gender: "",
    budget: "",
    chartStyle: "table",
  });
  const [recommendation, setRecommendation] = useState(null);
  const [error, setError] = useState("");

  // ✅ Fetch product catalog
  const { products, loading, error: fetchError } = useFetchProducts();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !formData.fullName ||
      !formData.dateOfBirth ||
      !formData.timeOfBirth ||
      !formData.placeOfBirth ||
      !formData.bodyWeight ||
      !formData.gender ||
      !formData.budget
    ) {
      setError("Please fill all fields.");
      return;
    }
    setError("");

    // 🪄 Randomly select a product within budget
    const filteredProducts = products.filter(
      (p) => p.price <= parseInt(formData.budget)
    );
    const randomProduct =
      filteredProducts[Math.floor(Math.random() * filteredProducts.length)];
    if (!randomProduct) {
      setError("No products available within your budget.");
      setRecommendation(null);
      return;
    }

    // Determine gemstone and astrology details
    const gemstone = randomProduct.name.split(" ")[0]; // Extract first word as gemstone
    const astrologyData = {
      Emerald: {
        planet: "Mercury",
        benefit: "Boosts communication and intellect",
        reason: "Your Mercury placement suggests enhanced intellectual growth.",
      },
      Ruby: {
        planet: "Sun",
        benefit: "Enhances vitality and leadership",
        reason: "Your Sun alignment indicates a need for strength and confidence.",
      },
      Sapphire: {
        planet: "Saturn",
        benefit: "Promotes discipline and wisdom",
        reason: "Your Saturn influence calls for stability and focus.",
      },
      Diamond: {
        planet: "Venus",
        benefit: "Attracts love and prosperity",
        reason: "Your Venus influence enhances charm and financial growth.",
      },
      // Add more gemstones as needed based on your product catalog
    };

    const gemDetails = astrologyData[gemstone] || {
      planet: "Unknown",
      benefit: "General well-being",
      reason: "This gem aligns with your astrological energy.",
    };
    const weight = `${parseInt(formData.bodyWeight) > 60 ? "7" : "5"} carats`;
    const note = `Recommended for ${
      formData.gender === "Male" ? "men" : "women"
    } based on astrology.`;
    const priceRange = `$${parseInt(formData.budget) - 50} - $${
      parseInt(formData.budget) + 50
    }`;

    setRecommendation({
      gemstone,
      planet: gemDetails.planet,
      benefit: gemDetails.benefit,
      weight,
      note,
      reason: gemDetails.reason,
      priceRange,
      product: randomProduct,
    });
  };

  const renderChart = () => {
    if (!recommendation || formData.chartStyle !== "chart") return null;
    return (
      <div className="mt-4">
        <canvas id="gemChart" width="400" height="200"></canvas>
        <script>
          {`
            const ctx = document.getElementById('gemChart').getContext('2d');
            new Chart(ctx, {
              type: 'bar',
              data: {
                labels: ['Weight', 'Price'],
                datasets: [{
                  label: 'Recommendation',
                  data: [${recommendation.weight.split(" ")[0]}, ${
            recommendation.priceRange.split("-")[0].replace("$", "")
          }],
                  backgroundColor: '#96c5a8',
                }]
              },
              options: {
                scales: { y: { beginAtZero: true } },
                plugins: { legend: { labels: { color: 'white' } } },
                scales: { x: { ticks: { color: 'white' } }, y: { ticks: { color: 'white' } } }
              }
            });
          `}
        </script>
      </div>
    );
  };

  return (
    <div
      className="relative flex min-h-screen flex-col bg-gradient-to-b from-[#122118] to-[#1b3124] text-white overflow-x-hidden"
      style={{ fontFamily: '"Plus Jakarta Sans", "Noto Sans", sans-serif' }}
    >
      <div className="layout-container flex h-full grow flex-col">
        <div className="px-4 sm:px-6 md:px-10 flex flex-1 justify-center py-10">
          <div className="layout-content-container flex flex-col max-w-full sm:max-w-[800px] md:max-w-[1000px] w-full flex-1">

            {/* Header Section */}
            <div className="flex flex-wrap justify-between items-center gap-4 p-6 bg-[#1b3124]/80 rounded-xl shadow-lg mb-6">
              <h1 className="text-[#96c5a8] text-4xl font-extrabold leading-tight tracking-wide">
                Gemstone Recommendation
              </h1>
              {error && <p className="text-red-300 text-sm italic">{error}</p>}
              {fetchError && <p className="text-red-400 text-sm italic">{fetchError}</p>}
            </div>

            {/* Recommendation Form */}
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-md mb-6">
              <h2 className="text-[#96c5a8] text-xl font-semibold mb-4 border-b border-[#366347]/50 pb-2">
                Enter Your Details
              </h2>
              <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4">
                <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} placeholder="Full Name" className="p-2 bg-[#122118] border border-[#366347]/50 rounded text-white focus:outline-none focus:border-[#96c5a8]" />
                <input type="date" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} className="p-2 bg-[#122118] border border-[#366347]/50 rounded text-white focus:outline-none focus:border-[#96c5a8]" />
                <input type="time" name="timeOfBirth" value={formData.timeOfBirth} onChange={handleChange} className="p-2 bg-[#122118] border border-[#366347]/50 rounded text-white focus:outline-none focus:border-[#96c5a8]" />
                <input type="text" name="placeOfBirth" value={formData.placeOfBirth} onChange={handleChange} placeholder="Place of Birth" className="p-2 bg-[#122118] border border-[#366347]/50 rounded text-white focus:outline-none focus:border-[#96c5a8]" />
                <input type="number" name="bodyWeight" value={formData.bodyWeight} onChange={handleChange} placeholder="Body Weight (kg)" className="p-2 bg-[#122118] border border-[#366347]/50 rounded text-white focus:outline-none focus:border-[#96c5a8]" />
                <select name="gender" value={formData.gender} onChange={handleChange} className="p-2 bg-[#122118] border border-[#366347]/50 rounded text-white focus:outline-none focus:border-[#96c5a8]">
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
                <input type="number" name="budget" value={formData.budget} onChange={handleChange} placeholder="Budget ($)" className="p-2 bg-[#122118] border border-[#366347]/50 rounded text-white focus:outline-none focus:border-[#96c5a8]" />
                <select name="chartStyle" value={formData.chartStyle} onChange={handleChange} className="p-2 bg-[#122118] border border-[#366347]/50 rounded text-white focus:outline-none focus:border-[#96c5a8]">
                  <option value="table">Table</option>
                  <option value="chart">Chart</option>
                </select>
                <button type="submit" className="md:col-span-2 bg-[#96c5a8] text-white p-2 rounded hover:bg-[#a0d1b9] transition-colors">
                  Get Recommendation
                </button>
              </form>
            </div>

            {/* Loader */}
            {loading && (
              <div className="text-center text-[#96c5a8] font-medium">
                Loading products...
              </div>
            )}

            {/* Recommendation Result */}
            {recommendation && (
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-md mb-6">
                <h2 className="text-[#96c5a8] text-xl font-semibold mb-4 border-b border-[#366347]/50 pb-2">
                  Your Gemstone Recommendation
                </h2>

                {formData.chartStyle === "table" ? (
                  <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4">
                    <p>Gemstone: <span className="text-[#c5dceb]">{recommendation.gemstone}</span></p>
                    <p>Associated Planet: <span className="text-[#c5dceb]">{recommendation.planet}</span></p>
                    <p>Benefit: <span className="text-[#c5dceb]">{recommendation.benefit}</span></p>
                    <p>Recommended Weight: <span className="text-[#c5dceb]">{recommendation.weight}</span></p>
                    <p>Price Range: <span className="text-[#c5dceb]">{recommendation.priceRange}</span></p>
                    <p className="col-span-full">Reason: <span className="text-[#c5dceb]">{recommendation.reason}</span></p>
                    <p className="col-span-full">Note: <span className="text-[#c5dceb]">{recommendation.note}</span></p>
                  </div>
                ) : (
                  renderChart()
                )}

                {/* ✅ Suggested Product */}
                {recommendation.product && (
                  <div className="mt-6 p-4 bg-[#122118] rounded-lg border border-[#366347]/50">
                    <h3 className="text-[#96c5a8] text-lg font-semibold mb-2">
                      Suggested Product from Catalogue
                    </h3>
                    <div className="flex items-center gap-4 sm:flex-col sm:items-start">
                      <img
                        src={recommendation.product.image}
                        alt={recommendation.product.name}
                        className="w-20 sm:w-24 h-20 sm:h-24 object-cover rounded-lg border border-[#366347]/50"
                      />
                      <div>
                        <p className="text-white font-medium text-lg">
                          {recommendation.product.name}
                        </p>
                        <p className="text-[#c5dceb] text-sm">
                          ${recommendation.product.price}
                        </p>
                        <button
                          onClick={() => navigate(`/product/${recommendation.product._id}`)}
                          className="mt-2 bg-[#96c5a8] text-white px-3 py-1 rounded hover:bg-[#a0d1b9]"
                        >
                          View Product
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                <p className="text-white text-sm mt-4">
                  Note: Consult an astrologer for personalized advice before wearing any gemstone.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default GemRecommendation;