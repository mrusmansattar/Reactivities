using AutoMapper;
using DomainClassLib;

namespace ApplicationClassLib.Core
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<Activity,Activity>();
        }

    }
}