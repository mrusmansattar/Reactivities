using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel;
namespace DomainClassLib
{

    public class Activity
    {
        public Guid Id{ get; set; }    
        public string  Title { get; set; }     
        public DateTime Date { get; set; }
        public string Description { get; set; }
        public string Categopry { get; set; }
        public string City { get; set; }
        public string Venue { get; set; }
        
    }
}