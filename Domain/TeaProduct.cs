using System;

namespace Domain
{
    public class TeaProduct
    {
        public Guid Id { get; set; }

        public string Title { get; set; }

        public string Description { get; set; }

        public decimal Price { get; set; }

        public DateTime Date { get; set; }

        public Boolean Reduced { get; set; }

        public string ImagePath { get; set; }
    }
}